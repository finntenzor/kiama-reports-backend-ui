#!/usr/bin/env node
/**
 * deploy.js
 *
 * 将dist中的替换到后端项目中
 */

// 依赖项
const fromDir = './dist'
const toDir = '../kiama/public/static/reports'
const indexToDir = '../kiama/application/reports_backend/view'
const fileutils = require('./fileutils')

// 导出主程序
function main() {
  if (fileutils.test(toDir)) {
    console.log('清空原static目录')
    fileutils.rm(toDir)
  } else {
    console.log('清空原static目录，已忽略')
  }
  console.log('移动文件中')
  fileutils.cp(fromDir, toDir)
  fileutils.mv(toDir + '/index.html', indexToDir + '/index.html')
  console.log('已成功将前端文件导出到后端项目中')
}
main()
