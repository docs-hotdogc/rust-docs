#!/bin/bash

echo "开始处理所有markdown文件的兼容性问题..."

# 1. 移除所有HTML标签
find docs -name "*.md" -type f -exec sed -i 's/<[^>]*>//g' {} \;

# 2. 处理特殊字符转义
find docs -name "*.md" -type f -exec sed -i 's/&lt;/</g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/&gt;/>/g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/&amp;/\&/g' {} \;

# 3. 移除可能的Vue模板语法冲突
find docs -name "*.md" -type f -exec sed -i 's/{{[^}]*}}/[代码占位符]/g' {} \;

# 4. 确保所有代码块都是rust
find docs -name "*.md" -type f -exec sed -i 's/```[a-zA-Z,_]*rust[a-zA-Z,_]*$/```rust/g' {} \;

echo "所有兼容性问题处理完成"