# rollup

1. rollup 是一个 JavaScript 模块打包工具，可以将多个小的代码片段编译为完整的库和应用

- webpack 打包非常繁琐，打包体积比较大
- rollup 主要是用来打包 js 库的
- vue/react/angular 都是在用 rollup 作为打包工具

2. 安装

- yarn init -y
- yarn add @babel/core @babel/preset-env @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-typescript rollup rollup-plugin-babel postcss rollup-plugin-postcss rollup-plugin-terser tslib typescript rollup-plugin-serve rollup-plugin-livereload

3. rollup 优势

- tree-shaing
- 兼容性 roolup 可以通过插件导入现有的 commongjs 模块

4. 插件

- @rollup/plugin-json 支持 json 导入
- rollup-plugin-terser 压缩打包
- @rollup/plugin-commonjs 和 @rollup/plugin-node-resolve 可以使用 commonjs 规范
- @rollup/plugin-babel
- @babel/core @babel/preset-env
- rollup-plugin-node-polyfills
