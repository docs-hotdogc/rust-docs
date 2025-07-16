#!/bin/bash

# 移除所有HTML标签，转换为纯markdown
find docs -name "*.md" -type f -exec sed -i 's/<figure class="listing">//g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/<\/figure>//g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/<figcaption>/### /g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/<\/figcaption>//g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/<span class="filename">/### /g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/<\/span>//g' {} \;
find docs -name "*.md" -type f -exec sed -i 's/<span class="caption">/### /g' {} \;

echo "HTML标签处理完成"