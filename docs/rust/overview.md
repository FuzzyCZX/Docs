# 概念总览

## RUST核心工具类比JS（`rustc`、`cargo`、`rustyup`）

| 工具 | 核心功能 | 前端类比 | 使用场景示例 |
| ----- | ------ | ---- | ---- |
| rustc | <ul>Rust 编译器<li>将 `.rs` 源码编译成可执行文件</li><li>进行严格的类型和内存安全检查</li></ul> | 相当于 `tsc`(TypeScript 编译器) | `rustc main.rs` → 生成 `main.exe` |
| cargo | <ul>Rust 项目管家<li>包管理 (`npm` + `yarn`)</li><li>构建工具 (`webpack`)</li><li>测试运行器 (`jest`)</li></ul> | `npm` + `webpack` + `jest` 合一 | <ul><li>`cargo new project`</li><li>`cargo build`</li><li>`cargo test`</li></ul> |
| rustup | <ul>Rust 工具链管理器<li>安装/更新 Rust 版本</li><li>管理工具链 (stable/beta/nightly)</li><li>安装跨平台编译目标</li></ul> | `nvm` + `node-gyp` 结合体 | <ul><li>`rustup update`</li><li>`rustup target add wasm32-unknown-unknown`</li></ul> |
