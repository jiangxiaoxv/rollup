import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/main.js',
  external: ['jquery'],
  output: {
    file: './dist/bundle.js', // 打包后的存放文件
    format: 'umd', // 输出格式 amd es6 iife umd cjs
    name: 'bundleName', // 打包后包的名字,如果是iife，umd需要制定一个全局变量
  },
  plugins: [json(), terser()],
}
