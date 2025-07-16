---
layout: home

hero:
  name: "Rust 程序设计语言"
  text: "简体中文版"
  tagline: "快速、安全、并发的系统编程语言"
  image:
    src: /rust-logo.svg
    alt: Rust
  actions:
    - theme: brand
      text: 开始学习
      link: /ch00-00-introduction
    - theme: alt
      text: 在 GitHub 查看
      link: https://github.com/KaiserY/trpl-zh-cn

features:
  - icon: ⚡️
    title: 零开销抽象
    details: Rust 允许你编写高级代码，而不牺牲性能。
  - icon: 🔒
    title: 内存安全
    details: 通过所有权系统，Rust 在编译时防止内存错误。
  - icon: 🔧
    title: 并发性
    details: 无惧并发编程，Rust 的类型系统确保线程安全。
  - icon: 🌍
    title: 跨平台
    details: 一次编写，处处运行，支持多种平台和架构。
---

## 关于本书

《Rust 程序设计语言》（The Rust Programming Language）是 Rust 官方教程的中文翻译版本。本书将教你如何使用 Rust 编程语言，Rust 能够让你编写更快、更可靠的软件。

本书面向希望学习 Rust 的程序员。我们假设你已经熟悉了至少一门编程语言，但并不假设你对系统编程或底层概念有所了解。

## 快速开始

```bash
# 安装 Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# 创建新项目
cargo new hello_world
cd hello_world

# 运行项目
cargo run
```

## 社区资源

- [Rust 语言中文社区](https://rustcc.cn/)
- [Rust 编程语言社区 2 群](https://qm.qq.com/cgi-bin/qm/qr?k=813448660)
- [原版英文文档](https://doc.rust-lang.org/book/)

## 状态

- **2024 edition** 翻译完毕
- 对照源码位置：[https://github.com/rust-lang/book/tree/main/src](https://github.com/rust-lang/book/tree/main/src)
- 每章翻译开头都带有官方链接和 commit hash 的注释

## 贡献

欢迎通过 [GitHub](https://github.com/KaiserY/trpl-zh-cn) 提交 Issue 或 Pull Request 来改进本文档。