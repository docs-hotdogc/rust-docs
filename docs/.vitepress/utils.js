// 处理 markdown 链接的函数
function processLinks(content) {
  // 将 .md 链接转换为无扩展名链接（VitePress 格式）
  return content.replace(/\[([^\]]+)\]\(([^)]+)\.md\)/g, '[$1]($2)')
}

// 处理代码块的函数
function processCodeBlocks(content) {
  // 保持原有的代码块格式，VitePress 应该能正确处理
  return content
}

// 处理图片路径的函数  
function processImages(content) {
  // 如果有相对路径的图片，确保路径正确
  return content.replace(/!\[([^\]]*)\]\(img\//g, '![$1](./img/')
}

export { processLinks, processCodeBlocks, processImages }