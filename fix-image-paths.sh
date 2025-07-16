#!/bin/bash

# 修复图片路径
find docs -name "*.md" -type f -exec sed -i 's/](img\//](\/img\//g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/src="img\//src="\/img\//g' {} \;

echo "图片路径修复完成"