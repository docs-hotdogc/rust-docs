#!/bin/bash

# 移除 mdbook 特定的语法
find docs -name "*.md" -type f -exec sed -i 's/{{#rustdoc_include.*}}/# [代码示例请参考原项目]/g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/{{#include.*}}/# [输出示例请参考原项目]/g' {} \;

echo "mdbook 语法处理完成"