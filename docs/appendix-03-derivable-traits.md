## 附录 C：可派生的 trait




在本书的各个部分中，我们讨论了可应用于结构体和枚举定义的 `derive` 属性。`derive` 属性会在使用 `derive` 语法标记的类型上生成对应 trait 的默认实现的代码。

在本附录中提供了标准库中所有可以使用 `derive` 的 trait 的参考。这些部分涉及到：

- 该 trait 将会派生什么样的操作符和方法
- 由 `derive` 提供什么样的 trait 实现
- 实现该 trait 对类型意味着什么
- 在何种条件下允许或不允许实现该 trait
- 需要 trait 操作的例子

如果你希望不同于 `derive` 属性所提供的行为，请查阅[标准库文档](https://doc.rust-lang.org/std/index.html) 中每个 trait 的细节以了解如何手动实现它们。

这里列出的 trait 是仅有的在标准库中定义且能通过 `derive` 在类型上实现。标准库中定义的其它 trait 不能通过 `derive` 在类型上实现。这些 trait 不存在有意义的默认行为，所以由你负责以合理的方式实现它们。

一个无法被派生的 trait 的例子是为终端用户处理格式化的 `Display` 。你应该时常考虑使用合适的方法来为终端用户显示一个类型。终端用户应该看到类型的什么部分？他们会找出相关部分吗？对他们来说最相关的数据格式是什么样的？Rust 编译器没有这样的洞察力，因此无法为你提供合适的默认行为。

本附录所提供的可派生 trait 列表并不全面：库可以为其自己的 trait 实现 `derive`，可以使用 `derive` 的 trait 列表事实上是无限的。实现 `derive` 涉及到过程宏的应用，这在第二十章的 [“宏”][macros] 一节中有介绍。

### 用于程序员输出的 `Debug`

`Debug` trait 用于开启格式化字符串中的调试格式，其通过在 `{}` 占位符中增加 `:?` 表明。

`Debug` trait 允许以调试目的来打印一个类型的实例，所以使用该类型的程序员可以在程序执行的特定时间点观察其实例。

例如，在使用 `assert_eq!` 宏时，`Debug` trait 是必需的。如果等式断言失败，这个宏就把给定实例的值作为参数打印出来，如此程序员可以看到两个实例为什么不相等。

### 等值比较的 `PartialEq` 和 `Eq`

`PartialEq` trait 可以比较某个类型的实例以检查是否相等，并开启了 `==` 和 `!=` 运算符的功能。

派生的 `PartialEq` 实现了 `eq` 方法。当 `PartialEq` 在结构体上派生时，只有**所有**的字段都相等时两个实例才相等，同时只要有任何字段不相等则两个实例就不相等。当在枚举上派生时，每一个变体都和其自身相等，且和其它变体都不相等。

例如，当使用 `assert_eq!` 宏时，需要比较一个类型的两个实例是否相等，则 `PartialEq` trait 是必须的。

`Eq` trait 没有方法。其作用是表明每一个被标记类型的值等于其自身。`Eq` trait 只能应用于那些实现了 `PartialEq` 的类型，但并非所有实现了 `PartialEq` 的类型都可以实现 `Eq`。浮点类型就是一个例子：浮点数的实现表明两个非数字（`NaN`，not-a-number）值是互不相等的。

例如，对于一个 `HashMap` 中的键（key）来说，`Eq` 是必须的，这样 `HashMap` 就可以知道两个键是否相等了。

### 排序比较的 `PartialOrd` 和 `Ord`

`PartialOrd` trait 可以基于排序的目的而比较一个类型的实例。实现了 `PartialOrd` 的类型可以使用 ``、`=` 操作符。但只能在同时实现了 `PartialEq` 的类型上使用 `PartialOrd`。

派生 `PartialOrd` 实现了 `partial_cmp` 方法，其返回一个 `Option`，但当给定值无法产生顺序时将返回 `None`。尽管大多数类型的值都可以比较，但一个无法产生顺序的例子是：浮点类型的非数字值（not-a-number，`NaN`）。对任何浮点数与 `NaN` 调用 `partial_cmp` 都会返回 `None`。

当在结构体上派生时，`PartialOrd` 按照结构体定义中字段出现的顺序，依次比较每个字段的值，以此来比较两个实例。当在枚举上派生时，认为在枚举定义中声明较早的枚举变体小于其后的变体。

例如，对于来自于 `rand` crate 中的 `gen_range` 方法来说，当在一个范围表达式指定的范围内生成一个随机值时，`PartialOrd` trait 是必须的。

`Ord` trait 也让你知道在一个带注解类型上的任意两个值存在有效顺序。`Ord` trait 实现了 `cmp` 方法，它返回一个 `Ordering` 而不是 `Option`，因为总存在一个合法的顺序。只可以在实现了 `PartialOrd` 和 `Eq`（`Eq` 依赖 `PartialEq`）的类型上使用 `Ord` trait。当在结构体或枚举上派生时，`cmp` 的行为与 `PartialOrd` 派生实现的 `partial_cmp` 相同。

例如，将值存储到 `BTreeSet` 中时，需要 `Ord` trait，因为该数据结构基于值的排序顺序来存储数据。

### 复制值的 `Clone` 和 `Copy`

`Clone` trait 可以明确地创建一个值的深拷贝（deep copy），复制过程可能包含任意代码的执行以及堆上数据的复制。查阅第四章 [“使用克隆的变量与数据交互”][variables-and-data-interacting-with-clone] 以获取有关 `Clone` 的更多信息。

派生 `Clone` 实现了 `clone` 方法，当其为整个类型实现时，会在类型的每一部分上调用 `clone` 方法。这意味着类型中所有字段或值也必须实现了 `Clone`，这样才能够派生 `Clone` 。

例如，当在一个 slice 上调用 `to_vec` 方法时，`Clone` 是必须的。slice 并不拥有其包含的实例，但是从 `to_vec` 中返回的 vector 需要拥有它们的实例，因此 `to_vec` 在每个元素上调用 `clone`。所以存储在切片中的类型必须实现 `Clone`。

`Copy` trait 允许你通过只拷贝存储在栈上的位来复制值；无需执行额外的代码。查阅第四章 [“只在栈上的数据：拷贝”][stack-only-data-copy] 的部分来获取有关 `Copy` 的更多信息。

`Copy` trait 并未定义任何方法来阻止编程人员重写这些方法或违反无需执行额外代码的假设。这样，所有程序员都可以假定复制值会非常快速。

可以在类型内部全部实现 `Copy` trait 的任意类型上派生 `Copy`。一个实现了 `Copy` 的类型必须也实现了 `Clone`，因为一个实现了 `Copy` 的类型也简单地实现了 `Clone`，其执行和 `Copy` 相同的任务。

`Copy` trait 很少是必需的；实现 `Copy` 的类型是有优化的，这意味着你无需调用 `clone`，这让代码更简洁。

任何使用 `Copy` 的代码都可以通过 `Clone` 实现，但代码可能会稍慢，或者不得不在代码中的许多位置上使用 `clone`。

### 固定大小的值到值映射的 `Hash`

`Hash` trait 可以实例化一个任意大小的类型，并且能够用哈希（hash）函数将该实例映射到一个固定大小的值上。派生 `Hash` 实现了 `hash` 方法。`hash` 方法的派生实现结合了在类型的每部分调用 `hash` 的结果，这意味着所有的字段或值也必须实现了 `Hash`，这样才能够派生 `Hash`。

例如，在 `HashMap` 上存储数据，存放 key 的时候，`Hash` 是必须的。

一个 `Hash` 是必须的例子是在 `HashMap` 中存储键来高效地存储数据。

### 默认值的 `Default`

`Default` trait 使你创建一个类型的默认值。派生 `Default` 实现了 `default` 函数。`default` 函数的派生实现调用了类型每部分的 `default` 函数，这意味着类型中所有的字段或值也必须实现了 `Default`，这样才能够派生 `Default` 。

`Default::default` 函数通常结合结构体更新语法一起使用，这在第五章的 [“使用结构体更新语法从其他实例中创建实例”][creating-instances-from-other-instances-with-struct-update-syntax] 部分有讨论。可以自定义一个结构体的一小部分字段而剩余字段则使用 `..Default::default()` 来设置默认值。

例如，当你在 `Option` 实例上使用 `unwrap_or_default` 方法时，`Default` trait 是必须的。如果 `Option` 是 `None` 的话，`unwrap_or_default` 方法将返回存储在 `Option` 中 `T` 类型的 `Default::default` 的结果。

[creating-instances-from-other-instances-with-struct-update-syntax]: ch05-01-defining-structs.html#使用结构体更新语法从其他实例创建实例
[stack-only-data-copy]: ch04-01-what-is-ownership.html#只在栈上的数据拷贝
[variables-and-data-interacting-with-clone]: ch04-01-what-is-ownership.html#使用克隆的变量与数据交互
[macros]: ch20-05-macros.html#宏
