import { defineConfig } from "vitepress";
import sidebar from "./sidebar";

export default defineConfig({
  title: "Rust 程序设计语言 简体中文版",
  description: "Rust 程序设计语言官方教程的中文翻译",
  lang: "zh-CN",

  // 禁用死链检查
  ignoreDeadLinks: true,

  head: [["link", { rel: "icon", href: "/favicon.ico" }]],

  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "开始学习", link: "/ch00-00-introduction" },
      { text: "社区", link: "https://rustcc.cn/" },
    ],
    // sidebar,

    sidebar: [
      {
        text: "简介",
        items: [
          { text: "前言", link: "/foreword" },
          { text: "简介", link: "/ch00-00-introduction" },
        ],
      },
      {
        text: "入门指南",
        collapsed: false,
        items: [
          { text: "入门指南", link: "/ch01-00-getting-started" },
          { text: "安装", link: "/ch01-01-installation" },
          { text: "Hello, World!", link: "/ch01-02-hello-world" },
          { text: "Hello, Cargo!", link: "/ch01-03-hello-cargo" },
          {
            text: "编写一个猜数字游戏",
            link: "/ch02-00-guessing-game-tutorial",
          },
        ],
      },
      {
        text: "基础概念",
        collapsed: false,
        items: [
          {
            text: "常见编程概念",
            link: "/ch03-00-common-programming-concepts",
          },
          { text: "变量与可变性", link: "/ch03-01-variables-and-mutability" },
          { text: "数据类型", link: "/ch03-02-data-types" },
          { text: "函数", link: "/ch03-03-how-functions-work" },
          { text: "注释", link: "/ch03-04-comments" },
          { text: "控制流", link: "/ch03-05-control-flow" },
        ],
      },
      {
        text: "所有权",
        collapsed: false,
        items: [
          { text: "认识所有权", link: "/ch04-00-understanding-ownership" },
          { text: "什么是所有权？", link: "/ch04-01-what-is-ownership" },
          { text: "引用与借用", link: "/ch04-02-references-and-borrowing" },
          { text: "Slice 类型", link: "/ch04-03-slices" },
        ],
      },
      {
        text: "结构体",
        collapsed: true,
        items: [
          { text: "使用结构体组织相关联的数据", link: "/ch05-00-structs" },
          { text: "结构体的定义和实例化", link: "/ch05-01-defining-structs" },
          { text: "结构体示例程序", link: "/ch05-02-example-structs" },
          { text: "方法语法", link: "/ch05-03-method-syntax" },
        ],
      },
      {
        text: "枚举和模式匹配",
        collapsed: true,
        items: [
          { text: "枚举和模式匹配", link: "/ch06-00-enums" },
          { text: "枚举的定义", link: "/ch06-01-defining-an-enum" },
          { text: "match 控制流结构", link: "/ch06-02-match" },
          { text: "if let 和 let else 简洁控制流", link: "/ch06-03-if-let" },
        ],
      },
      {
        text: "基本 Rust 技能",
        collapsed: true,
        items: [
          {
            text: "使用包、Crate 和模块管理不断增长的项目",
            link: "/ch07-00-managing-growing-projects-with-packages-crates-and-modules",
          },
          { text: "包和 Crate", link: "/ch07-01-packages-and-crates" },
          {
            text: "定义模块来控制作用域与私有性",
            link: "/ch07-02-defining-modules-to-control-scope-and-privacy",
          },
          {
            text: "引用模块树中项的路径",
            link: "/ch07-03-paths-for-referring-to-an-item-in-the-module-tree",
          },
          {
            text: "使用 use 关键字将路径引入作用域",
            link: "/ch07-04-bringing-paths-into-scope-with-the-use-keyword",
          },
          {
            text: "将模块拆分成多个文件",
            link: "/ch07-05-separating-modules-into-different-files",
          },
          { text: "常见集合", link: "/ch08-00-common-collections" },
          { text: "使用 Vector 储存列表", link: "/ch08-01-vectors" },
          { text: "使用字符串储存 UTF-8 编码的文本", link: "/ch08-02-strings" },
          { text: "使用 Hash Map 储存键值对", link: "/ch08-03-hash-maps" },
          { text: "错误处理", link: "/ch09-00-error-handling" },
          {
            text: "用 panic! 处理不可恢复的错误",
            link: "/ch09-01-unrecoverable-errors-with-panic",
          },
          {
            text: "用 Result 处理可恢复的错误",
            link: "/ch09-02-recoverable-errors-with-result",
          },
          { text: "要不要 panic!", link: "/ch09-03-to-panic-or-not-to-panic" },
          { text: "泛型、Trait 和生命周期", link: "/ch10-00-generics" },
          { text: "泛型数据类型", link: "/ch10-01-syntax" },
          { text: "Trait：定义共同行为", link: "/ch10-02-traits" },
          { text: "生命周期确保引用有效", link: "/ch10-03-lifetime-syntax" },
          { text: "编写自动化测试", link: "/ch11-00-testing" },
          { text: "如何编写测试", link: "/ch11-01-writing-tests" },
          { text: "控制测试如何运行", link: "/ch11-02-running-tests" },
          { text: "测试的组织结构", link: "/ch11-03-test-organization" },
          {
            text: "一个 I/O 项目：构建命令行程序",
            link: "/ch12-00-an-io-project",
          },
          {
            text: "接受命令行参数",
            link: "/ch12-01-accepting-command-line-arguments",
          },
          { text: "读取文件", link: "/ch12-02-reading-a-file" },
          {
            text: "重构以改进模块化与错误处理",
            link: "/ch12-03-improving-error-handling-and-modularity",
          },
          {
            text: "采用测试驱动开发完善库的功能",
            link: "/ch12-04-testing-the-librarys-functionality",
          },
          {
            text: "处理环境变量",
            link: "/ch12-05-working-with-environment-variables",
          },
          {
            text: "将错误信息输出到标准错误而不是标准输出",
            link: "/ch12-06-writing-to-stderr-instead-of-stdout",
          },
        ],
      },
      {
        text: "Rust 编程思想",
        collapsed: true,
        items: [
          {
            text: "函数式语言特性：迭代器与闭包",
            link: "/ch13-00-functional-features",
          },
          { text: "闭包：可以捕获其环境的匿名函数", link: "/ch13-01-closures" },
          { text: "使用迭代器处理元素序列", link: "/ch13-02-iterators" },
          {
            text: "改进之前的 I/O 项目",
            link: "/ch13-03-improving-our-io-project",
          },
          { text: "性能比较：循环对迭代器", link: "/ch13-04-performance" },
          {
            text: "更多关于 Cargo 和 Crates.io 的内容",
            link: "/ch14-00-more-about-cargo",
          },
          { text: "采用发布配置自定义构建", link: "/ch14-01-release-profiles" },
          {
            text: "将 crate 发布到 Crates.io",
            link: "/ch14-02-publishing-to-crates-io",
          },
          { text: "Cargo 工作空间", link: "/ch14-03-cargo-workspaces" },
          {
            text: "使用 cargo install 安装二进制文件",
            link: "/ch14-04-installing-binaries",
          },
          { text: "Cargo 自定义扩展命令", link: "/ch14-05-extending-cargo" },
          { text: "智能指针", link: "/ch15-00-smart-pointers" },
          { text: "使用 Box<T> 指向堆上数据", link: "/ch15-01-box" },
          {
            text: "使用 Deref Trait 将智能指针当作常规引用处理",
            link: "/ch15-02-deref",
          },
          { text: "使用 Drop Trait 运行清理代码", link: "/ch15-03-drop" },
          { text: "Rc<T> 引用计数智能指针", link: "/ch15-04-rc" },
          {
            text: "RefCell<T> 与内部可变性模式",
            link: "/ch15-05-interior-mutability",
          },
          { text: "引用循环会导致内存泄漏", link: "/ch15-06-reference-cycles" },
          { text: "无畏并发", link: "/ch16-00-concurrency" },
          { text: "使用线程同时地运行代码", link: "/ch16-01-threads" },
          {
            text: "使用消息传递在线程间通信",
            link: "/ch16-02-message-passing",
          },
          { text: "共享状态并发", link: "/ch16-03-shared-state" },
          {
            text: "使用 Sync 与 Send Traits 的可扩展并发",
            link: "/ch16-04-extensible-concurrency-sync-and-send",
          },
          { text: "Async 和 await", link: "/ch17-00-async-await" },
          {
            text: "Futures 和 async 语法",
            link: "/ch17-01-futures-and-syntax",
          },
          { text: "并发与 async", link: "/ch17-02-concurrency-with-async" },
          { text: "使用任意数量的 futures", link: "/ch17-03-more-futures" },
          { text: "流（Streams）", link: "/ch17-04-streams" },
          {
            text: "深入理解 async 相关的 traits",
            link: "/ch17-05-traits-for-async",
          },
          {
            text: "future、任务和线程",
            link: "/ch17-06-futures-tasks-threads",
          },
          { text: "面向对象编程特性", link: "/ch18-00-oop" },
          { text: "面向对象语言的特征", link: "/ch18-01-what-is-oo" },
          {
            text: "顾及不同类型值的 trait 对象",
            link: "/ch18-02-trait-objects",
          },
          {
            text: "面向对象设计模式的实现",
            link: "/ch18-03-oo-design-patterns",
          },
        ],
      },
      {
        text: "高级主题",
        collapsed: true,
        items: [
          { text: "模式与模式匹配", link: "/ch19-00-patterns" },
          {
            text: "所有可能会用到模式的位置",
            link: "/ch19-01-all-the-places-for-patterns",
          },
          {
            text: "Refutability（可反驳性）: 模式是否会匹配失效",
            link: "/ch19-02-refutability",
          },
          { text: "模式语法", link: "/ch19-03-pattern-syntax" },
          { text: "高级特性", link: "/ch20-00-advanced-features" },
          { text: "不安全 Rust", link: "/ch20-01-unsafe-rust" },
          { text: "高级 trait", link: "/ch20-02-advanced-traits" },
          { text: "高级类型", link: "/ch20-03-advanced-types" },
          {
            text: "高级函数与闭包",
            link: "/ch20-04-advanced-functions-and-closures",
          },
          { text: "宏", link: "/ch20-05-macros" },
          {
            text: "最后的项目：构建多线程 web server",
            link: "/ch21-00-final-project-a-web-server",
          },
          { text: "建立单线程 web server", link: "/ch21-01-single-threaded" },
          {
            text: "将单线程 server 变为多线程 server",
            link: "/ch21-02-multithreaded",
          },
          {
            text: "优雅停机与清理",
            link: "/ch21-03-graceful-shutdown-and-cleanup",
          },
        ],
      },
      {
        text: "附录",
        collapsed: true,
        items: [
          { text: "附录", link: "/appendix-00" },
          { text: "A - 关键字", link: "/appendix-01-keywords" },
          { text: "B - 运算符与符号", link: "/appendix-02-operators" },
          { text: "C - 可派生的 trait", link: "/appendix-03-derivable-traits" },
          {
            text: "D - 实用开发工具",
            link: "/appendix-04-useful-development-tools",
          },
          { text: "E - 版本", link: "/appendix-05-editions" },
          { text: "F - 本书译本", link: "/appendix-06-translation" },
          {
            text: 'G - Rust 是如何开发的与 "Nightly Rust"',
            link: "/appendix-07-nightly-rust",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/KaiserY/trpl-zh-cn" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Rust 中文社区",
    },

    search: {
      provider: "local",
    },

    editLink: {
      pattern: "https://github.com/KaiserY/trpl-zh-cn/edit/main/src/:path",
      text: "在 GitHub 上编辑此页",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },

  markdown: {
    // languages: [
    //   {
    //     id: "rust",
    //     aliases: ["rust", "rs"],
    //   },
    //   {
    //     id: "toml",
    //     aliases: ["toml"],
    //   },
    // ],
    codeTransformers: [
      {
        preprocess(code, options) {
          // 处理 rust 代码块中的特殊标识符
          if (options.lang?.includes("rust")) {
            // 移除 rust 后面的修饰符（如 ignore, no_run 等）
            options.lang = "rust";
          }
          return code;
        },
        postprocess(code) {
          return code.replace(/\[!code (.*?)\]/g, "");
        },
      },
    ],
  },

  // 配置 Vite 以处理特殊的 markdown 语法
  vite: {
    define: {
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    },
  },
});
