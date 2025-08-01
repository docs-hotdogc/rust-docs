## 注释




所有程序员都力求使其代码易于理解，不过有时还需要提供额外的解释。在这种情况下，程序员在源码中留下 **注释**（*comments*），编译器会忽略它们，不过阅读代码的人可能觉得有用。

这是一个简单的注释：

```rust
// hello, world
```

在 Rust 中，惯用的注释样式是以两个斜杠开始注释，并持续到本行的结尾。对于超过一行的注释，需要在每一行前都加上 `//`，像这样：

```rust
// So we’re doing something complicated here, long enough that we need
// multiple lines of comments to do it! Whew! Hopefully, this comment will
// explain what’s going on.
```

注释也可以放在包含代码的行的末尾：

### 文件名：src/main.rs

```rust
# [代码示例请参考原项目]
```

不过你更经常看到的是以这种格式使用它们，也就是位于它所解释的代码行的上面一行：

### 文件名：src/main.rs

```rust
# [代码示例请参考原项目]
```

Rust 还有另一种注释，称为文档注释，我们将在 14 章的 [“将 crate 发布到 Crates.io” ][publishing]部分讨论它。

[publishing]: ch14-02-publishing-to-crates-io.html
