/**
 * @type {import('vitepress').DefaultTheme.Sidebar}
 */
export default [
  {
    text: "介绍",
    items: [
      { text: "封面", link: "/title-page" },
      { text: "前言", link: "/foreword" },
      { text: "简介", link: "/ch00-00-introduction" },
    ],
  },
  // {
  //   text: "入门指南",
  //   items: [
  //     {
  //       text: "入门指南",
  //       link: "/ch01-00-getting-started",
  //       items: [
  //         { text: "安装", link: "/ch01-01-installation" },
  //         { text: "Hello, World!", link: "/ch01-02-hello-world" },
  //         { text: "Hello, Cargo!", link: "/ch01-03-hello-cargo" },
  //       ],
  //     },
  //     { text: "编写一个猜数字游戏", link: "/ch02-00-guessing-game-tutorial" },
  //     {
  //       text: "常见编程概念",
  //       link: "/ch03-00-common-programming-concepts",
  //       items: [
  //         { text: "变量与可变性", link: "/ch03-01-variables-and-mutability" },
  //         { text: "数据类型", link: "/ch03-02-data-types" },
  //         { text: "函数", link: "/ch03-03-how-functions-work" },
  //         { text: "注释", link: "/ch03-04-comments" },
  //         { text: "控制流", link: "/ch03-05-control-flow" },
  //       ],
  //     },
  //     {
  //       text: "认识所有权",
  //       link: "/ch04-00-understanding-ownership",
  //       items: [
  //         { text: "什么是所有权？", link: "/ch04-01-what-is-ownership" },
  //         { text: "引用与借用", link: "/ch04-02-references-and-borrowing" },
  //         { text: "Slice 类型", link: "/ch04-03-slices" },
  //       ],
  //     },
  //     {
  //       text: "使用结构体组织相关联的数据",
  //       link: "/ch05-00-structs",
  //       items: [
  //         { text: "结构体的定义和实例化", link: "/ch05-01-defining-structs" },
  //         { text: "结构体示例程序", link: "/ch05-02-example-structs" },
  //         { text: "方法语法", link: "/ch05-03-method-syntax" },
  //       ],
  //     },
  //     {
  //       text: "枚举和模式匹配",
  //       link: "/ch06-00-enums",
  //       items: [
  //         { text: "枚举的定义", link: "/ch06-01-defining-an-enum" },
  //         { text: "match 控制流结构", link: "/ch06-02-match" },
  //         { text: "if let 和 let else 简洁控制流", link: "/ch06-03-if-let" },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   text: "基本 Rust 技能",
  //   items: [
  //     {
  //       text: "包、Crate 和模块",
  //       link: "/ch07-00-managing-growing-projects-with-packages-crates-and-modules",
  //       items: [
  //         { text: "包和 Crate", link: "/ch07-01-packages-and-crates" },
  //         {
  //           text: "定义模块",
  //           link: "/ch07-02-defining-modules-to-control-scope-and-privacy",
  //         },
  //         {
  //           text: "模块路径",
  //           link: "/ch07-03-paths-for-referring-to-an-item-in-the-module-tree",
  //         },
  //         {
  //           text: "use 关键字",
  //           link: "/ch07-04-bringing-paths-into-scope-with-the-use-keyword",
  //         },
  //         {
  //           text: "拆分模块到多文件",
  //           link: "/ch07-05-separating-modules-into-different-files",
  //         },
  //       ],
  //     },
  //     {
  //       text: "常见集合",
  //       link: "/ch08-00-common-collections",
  //       items: [
  //         { text: "Vector", link: "/ch08-01-vectors" },
  //         { text: "字符串", link: "/ch08-02-strings" },
  //         { text: "Hash Map", link: "/ch08-03-hash-maps" },
  //       ],
  //     },
  //     {
  //       text: "错误处理",
  //       link: "/ch09-00-error-handling",
  //       items: [
  //         { text: "panic!", link: "/ch09-01-unrecoverable-errors-with-panic" },
  //         { text: "Result", link: "/ch09-02-recoverable-errors-with-result" },
  //         { text: "要不要 panic!", link: "/ch09-03-to-panic-or-not-to-panic" },
  //       ],
  //     },
  //     {
  //       text: "泛型、Trait 和生命周期",
  //       link: "/ch10-00-generics",
  //       items: [
  //         { text: "泛型数据类型", link: "/ch10-01-syntax" },
  //         { text: "Trait", link: "/ch10-02-traits" },
  //         { text: "生命周期", link: "/ch10-03-lifetime-syntax" },
  //       ],
  //     },
  //     {
  //       text: "编写自动化测试",
  //       link: "/ch11-00-testing",
  //       items: [
  //         { text: "如何编写测试", link: "/ch11-01-writing-tests" },
  //         { text: "控制测试如何运行", link: "/ch11-02-running-tests" },
  //         { text: "测试的组织结构", link: "/ch11-03-test-organization" },
  //       ],
  //     },
  //     {
  //       text: "一个 I/O 项目：构建命令行程序",
  //       link: "/ch12-00-an-io-project",
  //       items: [
  //         {
  //           text: "接受命令行参数",
  //           link: "/ch12-01-accepting-command-line-arguments",
  //         },
  //         { text: "读取文件", link: "/ch12-02-reading-a-file" },
  //         {
  //           text: "重构",
  //           link: "/ch12-03-improving-error-handling-and-modularity",
  //         },
  //         {
  //           text: "测试驱动开发",
  //           link: "/ch12-04-testing-the-librarys-functionality",
  //         },
  //         {
  //           text: "处理环境变量",
  //           link: "/ch12-05-working-with-environment-variables",
  //         },
  //         {
  //           text: "输出到标准错误",
  //           link: "/ch12-06-writing-to-stderr-instead-of-stdout",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   text: "Rust 编程思想",
  //   items: [
  //     {
  //       text: "函数式特性：迭代器与闭包",
  //       link: "/ch13-00-functional-features",
  //       items: [
  //         { text: "闭包", link: "/ch13-01-closures" },
  //         { text: "迭代器", link: "/ch13-02-iterators" },
  //         { text: "改进 I/O 项目", link: "/ch13-03-improving-our-io-project" },
  //         { text: "性能比较", link: "/ch13-04-performance" },
  //       ],
  //     },
  //     {
  //       text: "更多关于 Cargo 和 Crates.io",
  //       link: "/ch14-00-more-about-cargo",
  //       items: [
  //         { text: "发布配置", link: "/ch14-01-release-profiles" },
  //         {
  //           text: "发布到 Crates.io",
  //           link: "/ch14-02-publishing-to-crates-io",
  //         },
  //         { text: "Cargo 工作空间", link: "/ch14-03-cargo-workspaces" },
  //         { text: "安装二进制文件", link: "/ch14-04-installing-binaries" },
  //         { text: "自定义命令", link: "/ch14-05-extending-cargo" },
  //       ],
  //     },
  //     {
  //       text: "智能指针",
  //       link: "/ch15-00-smart-pointers",
  //       items: [
  //         { text: "Box<T>", link: "/ch15-01-box" },
  //         { text: "Deref Trait", link: "/ch15-02-deref" },
  //         { text: "Drop Trait", link: "/ch15-03-drop" },
  //         { text: "Rc<T>", link: "/ch15-04-rc" },
  //         { text: "RefCell<T>", link: "/ch15-05-interior-mutability" },
  //         { text: "引用循环", link: "/ch15-06-reference-cycles" },
  //       ],
  //     },
  //     {
  //       text: "无畏并发",
  //       link: "/ch16-00-concurrency",
  //       items: [
  //         { text: "线程", link: "/ch16-01-threads" },
  //         { text: "消息传递", link: "/ch16-02-message-passing" },
  //         { text: "共享状态", link: "/ch16-03-shared-state" },
  //         {
  //           text: "Sync 与 Send",
  //           link: "/ch16-04-extensible-concurrency-sync-and-send",
  //         },
  //       ],
  //     },
  //     {
  //       text: "Async 和 await",
  //       link: "/ch17-00-async-await",
  //       items: [
  //         { text: "Futures 和 async", link: "/ch17-01-futures-and-syntax" },
  //         { text: "并发与 async", link: "/ch17-02-concurrency-with-async" },
  //         { text: "任意数量的 futures", link: "/ch17-03-more-futures" },
  //         { text: "流 (Streams)", link: "/ch17-04-streams" },
  //         { text: "深入 async traits", link: "/ch17-05-traits-for-async" },
  //         {
  //           text: "future、任务和线程",
  //           link: "/ch17-06-futures-tasks-threads",
  //         },
  //       ],
  //     },
  //     {
  //       text: "面向对象编程特性",
  //       link: "/ch18-00-oop",
  //       items: [
  //         { text: "面向对象语言的特征", link: "/ch18-01-what-is-oo" },
  //         { text: "Trait 对象", link: "/ch18-02-trait-objects" },
  //         { text: "OO 设计模式", link: "/ch18-03-oo-design-patterns" },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   text: "高级主题",
  //   items: [
  //     {
  //       text: "模式与模式匹配",
  //       link: "/ch19-00-patterns",
  //       items: [
  //         {
  //           text: "所有用到模式的位置",
  //           link: "/ch19-01-all-the-places-for-patterns",
  //         },
  //         { text: "Refutability", link: "/ch19-02-refutability" },
  //         { text: "模式语法", link: "/ch19-03-pattern-syntax" },
  //       ],
  //     },
  //     {
  //       text: "高级特性",
  //       link: "/ch20-00-advanced-features",
  //       items: [
  //         { text: "不安全 Rust", link: "/ch20-01-unsafe-rust" },
  //         { text: "高级 trait", link: "/ch20-02-advanced-traits" },
  //         { text: "高级类型", link: "/ch20-03-advanced-types" },
  //         {
  //           text: "高级函数与闭包",
  //           link: "/ch20-04-advanced-functions-and-closures",
  //         },
  //         { text: "宏", link: "/ch20-05-macros" },
  //       ],
  //     },
  //     {
  //       text: "最后的项目：构建 Web Server",
  //       link: "/ch21-00-final-project-a-web-server",
  //       items: [
  //         { text: "单线程 Web Server", link: "/ch21-01-single-threaded" },
  //         { text: "多线程 Web Server", link: "/ch21-02-multithreaded" },
  //         {
  //           text: "优雅停机与清理",
  //           link: "/ch21-03-graceful-shutdown-and-cleanup",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   text: "附录",
  //   link: "/appendix-00",
  //   items: [
  //     { text: "A - 关键字", link: "/appendix-01-keywords" },
  //     { text: "B - 运算符与符号", link: "/appendix-02-operators" },
  //     { text: "C - 可派生的 trait", link: "/appendix-03-derivable-traits" },
  //     {
  //       text: "D - 实用开发工具",
  //       link: "/appendix-04-useful-development-tools",
  //     },
  //     { text: "E - 版本", link: "/appendix-05-editions" },
  //     { text: "F - 本书译本", link: "/appendix-06-translation" },
  //     { text: "G - Rust 是如何开发的", link: "/appendix-07-nightly-rust" },
  //   ],
  // },
];
