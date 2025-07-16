#!/bin/bash

# 处理所有 markdown 文件中的代码块语言标识符
find docs -name "*.md" -type f -exec sed -i 's/```rust,ignore,does_not_compile/```rust/g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/```rust,ignore,panics/```rust/g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/```rust,ignore,not_desired_behavior/```rust/g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/```rust,noplayground,not_desired_behavior/```rust/g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/```rust,test_harness,does_not_compile,ignore/```rust/g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/```rust,test_harness/```rust/g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/```rust,should_panic,panics/```rust/g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/```rust,should_panic,noplayground/```rust/g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/```rust,should_panic/```rust/g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/```rust,panics,noplayground/```rust/g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/```rust,not_desired_behavior,noplayground/```rust/g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/```rust,not_desired_behavior/```rust/g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/```rust,ignore/```rust/g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/```rust,no_run/```rust/g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/```rust,noplayground/```rust/g' {} \;

echo "代码块语言标识符处理完成"