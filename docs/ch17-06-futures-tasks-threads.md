## 结合使用 future、任务和线程




正如我们在[第十六章][ch16]所见，线程提供了一种并发的方式。在这一章节我们见过了另一种方式：通过 future 和流来使用异步。如果你好奇何时选择一个而不是另一个，答案是：视具体情况而定！同时在很多场景下，我们不应只选择线程**或**异步，而应同时考虑线程**和**异步两者。

几十年来很多操作系统已经提供了基于线程的并发模型，因此很多编程语言也对其提供了支持。然而这些模型并非没有取舍。在很多操作系统中，它们为每一个线程使用了不少的内存，同时启动和停止带来了一些开销。线程也只有当你的操作系统和硬件支持它们的时候才是一个选项。不同于主流的桌面和移动电脑，一些嵌入式系统根本没有操作系统，因此也就没有线程。

异步模型提供了一个不同的 -- 最终也是互补的 -- 权衡取舍。在异步模型中，并发操作无需各自独立的线程。相反，它们运行在任务上，正如流小节中我们用 `trpl::spawn_task` 从异步函数中开始工作一样。任务类似于线程，但不是由操作系统管理，而是由库级别的代码管理：也就是运行时。

在上一小节中，我们看到可以通过异步信道来构建一个流并产生一个可以在异步代码中调用的异步任务。我们也可以用线程来做到完全相同的事情。在示例 17-40 中使用了 `trpl::spawn_task` 和 `trpl::sleep`。在示例 17-41 中，我们将 `get_intervals` 函数中的代码替换为标准库中的 `thread::spawn` 和 `thread::sleep` API。



文件名：src/main.rs

```rust
# [代码示例请参考原项目]
```

### 示例 17-41：为 `get_intervals` 函数使用 `std::thread` API 而不是异步 `trpl` API



如果你运行这段代码，其输入与示例 17-40 的一样。同时请注意从调用代码的角度来说改变是多么的微小。而且，即便一个函数在运行时上产生一个异步任务而另一个产生一个系统线程，其返回的流不受该区别的影响。

尽管它们是相似的，这两种方式的行为非常不同，尽管在这个非常简单的例子中我们可能很难进行测量。我们可以在任何现代计算机中产生数以百万计的异步任务。如果尝试用线程来这样做，我们实际上会耗尽内存！

然而，这些 API 如此相似是有理由的。线程作为同步操作集的边界；线程**之间**的并发是可能的。任务作为**异步**操作集的边界，任务**之间**和**之内**的并发是可能的，因为任务可以在其内部切换 future。最后，future 是 Rust 中最细粒度的并发单位，同时每一个 future 可能代表一棵由其它 future 组成的树。其运行时 -- 更具体地说，其执行器（executor）-- 管理任务，任务则管理 future。在这一点上，任务类似于轻量的、运行时管理的线程，并具有由运行时而非操作系统管理所赋予的额外能力。

这并不意味着异步任务总是优于线程（反之亦然）。基于线程的并发在某种程度上来说是一个比基于 `async` 的并发更简单的编程模型。这既可以是优点，也可以是缺点。线程有点像 “射后不理”（“fire and forget”）；它们没有原生等同于 future 的机制，所以它们简单地运行到结束而不会被中断，除非操作系统本身介入。也就是说，它们没有像 future 那样内建**任务内并发**（**intratask concurrency**）支持。Rust 中的线程也没有提供取消机制 -- 本章虽未明确讨论此主题，但当我们结束一个 future 时，其状态能够被正确清理就隐含了这一事实。

这些限制也使得线程比 future 更加难以组合。例如，更加难以使用线程构建类似于本章之前的 `timeout` 和 `throttle` 辅助方法。正如我们所见，future 更加丰富的数据结构的事实意味着它们可以更自然地组合在一起。

接下来，任务在 future 之上提供了**额外**控制，允许我们选择在何处如何组合它们。同时事实证明线程和 future 常常能很好地协同工作，因为任务可以（至少是在一些运行时中）在线程间移动。事实上，在底层我们使用的运行时 -- 包括 `spawn_blocking` 和 `spawn_task` 函数 -- 默认就是多线程的！很多运行时采用一种被称为**工作窃取**（**work stealing**）的方式来透明地在线程间移动任务，它基于当前线程是如何被利用的，以提高系统的整体性能。这个方式实际上需要线程**和**任务，因此也需要 future。

当思考何时采用哪种方法时，考虑这些经验法则：

- 如果工作是**非常可并行的**，例如处理大量数据其中每一部分数据都可以单独处理时，线程是更佳的选择。
- 如果工作是**非常并发的**，例如处理大量不同来源的消息，它们可能有着不同的间隔或者速率，异步是更佳的选择。

同时如果你同时需要并行和并发，也无需在线程和异步间做出选择。你可以随意同时使用它们，让它们各自处理最擅长的工作。例如，示例 17-42 展示了一个这样的真实世界 Rust 代码中非常常见的组合示例。



文件名：src/main.rs

```rust
# [代码示例请参考原项目]
```

### 示例 17-42：在线程中通过阻塞代码发送消息并在 async 代码块中 await 消息



我们以创建异步信道作为开始，接着产生一个线程来获取信道发送端的所有权。在线程中，我们发送数字 1 到 10，每个之间休眠一秒。最后，就像贯穿本章的那样将一个 async 代码块创建的 future 传递给 `trpl::run` 运行。在 future 中，我们 await 这些信息，就像我们见过的其它消息传递的示例那样。

为了回到本章开头提出的场景，想象一下用一个专门的线程来运行一系列视频解码任务（因为视频解码是计算密集型任务）不过通知 UI 这些任务完成了是通过异步信道完成的。在现实世界的用例中有无数这类组合的例子。

## 总结

这并不会是本书中你最后一次接触并发。[第二一章][ch21] 中的项目会在一个更加真实的场景中运用这些概念，而不是这里讨论的简单示例，同时会更直接地比较线程和任务的解决问题方式。

无论你选择何种方式，Rust 提供了编写安全、快速和并发代码的工具 -- 无论是用于高吞吐量 web 服务器或是用于嵌入式操作系统。

接下来，我们会讨论随着 Rust 程序增大时如何以惯用的方式对问题进行建模和对解决方案进行结构化。此外我们还会讨论 Rust 的惯用写法如何与你可能已经熟悉的面向对象编程惯例相对应。

[ch16]: ch16-00-concurrency.html
[combining-futures]: ch17-03-more-futures.html#构建我们自己的异步抽象
[streams]: ch17-04-streams.html#组合流
[ch21]: ch21-00-final-project-a-web-server.html
