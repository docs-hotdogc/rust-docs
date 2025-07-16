# Rust 程序设计语言（2024 版）简体中文版 (VitePress 迁移版)

[![GitHub license](https://img.shields.io/github/license/docs-hotdogc/rust-docs)](https://github.com/docs-hotdogc/rust-docs/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/docs-hotdogc/rust-docs)](https://github.com/docs-hotdogc/rust-docs/stargazers)
一份《The Rust Programming Language》官方教程的简体中文翻译，使用 [VitePress](https://vitepress.dev/) 进行了重新构建，以提供更现代化、更快速的阅读体验。

## 📖 [在线阅读](https://your-vitepress-site.com)  ---

## 项目简介

本项目 fork 自 [KaiserY/trpl-zh-cn](https://github.com/KaiserY/trpl-zh-cn) 的 2024 版中文翻译。

## 本地开发与贡献

如果你希望在本地运行此站点，或参与贡献，请遵循以下步骤。本项目推荐使用 [pnpm](https://pnpm.io/) 作为包管理器。

1.  **克隆仓库**
    ```bash
    git clone [https://github.com/docs-hotdogc/rust-docs.git](https://github.com/docs-hotdogc/rust-docs.git)
    cd rust-docs
    ```

2.  **安装依赖**
    ```bash
    pnpm install
    ```
    *如果你没有安装 pnpm，也可以使用 `npm install` 或 `yarn`。*

3.  **启动开发服务器**
    ```bash
    pnpm docs:dev
    ```
    此命令会启动一个本地开发服务器，通常地址为 `http://localhost:5173`。

4.  **构建静态站点**
    如果你需要生成最终的静态文件（用于部署），请运行：
    ```bash
    pnpm docs:build
    ```
    构建好的文件将位于 `docs/.vitepress/dist` 目录。

## 内容来源与校对

#### 内容来源
- 本项目翻译内容与官方 `main` 分支保持同步。
- 官方源仓库位置：[https://github.com/rust-lang/book/tree/main/src][source]
- 每章翻译的开头都带有官方链接和 commit hash 的注释，若发现与官方不一致，欢迎提交 Issue 或 PR。

[source]: https://github.com/rust-lang/book/tree/main/src

#### 翻译校对
- 部分章节采用 ChatGPT-4o-mini 进行翻译校对。提示词详见 [proofreading_prompt.md](proofreading_prompt.md)。

## 其他格式 (PDF)

原项目提供了一个由 `mdbook-typst-pdf` 生成的 [PDF 版本](https://kaisery.github.io/trpl-zh-cn/Rust%20%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E8%AF%AD%E8%A8%80%20%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87%E7%89%88.pdf)。

**请注意**：由于本项目已迁移至 VitePress，该 PDF 可能不会再更新，其内容可能落后于当前网站。

## 社区资源

-   **Rust 语言中文社区**：<https://rustcc.cn/>
-   **Rust 编程语言社区 1 群**：303838735（已满，只能内部邀请）
-   **Rust 编程语言社区 2 群**：813448660

## 许可证

本项目采用 [MIT](LICENSE) 许可证。
