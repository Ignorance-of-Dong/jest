/*
 * @Author: zhangzheng
 * @Date: 2020-08-24 11:21:01
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-08-24 11:21:29
 * @Descripttion:
 */
const webpack = require("webpack");
var version = "";
if (process.argv[3]) {
  version = process.argv[3].replace(/-/g, "");
} else {
  version = new Date().getTime();
}

const path = require("path");
function resolve(dir) {
  return path.join(__dirname, "", dir);
}
let pro = process.env.NODE_ENV === "production" ? true : false;
module.exports = {
  /** 区分打包环境与开发环境
   * process.env.NODE_ENV==='production'  (打包环境)
   * process.env.NODE_ENV==='development' (开发环境)
   * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
   */
  // 基本路径
  publicPath: "/",
  // 输出文件目录
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: process.env.NODE_ENV !== "production",
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    const fileRule = config.module.rule("file");
    fileRule.uses.clear();
    fileRule
      .test(/\.pdf|ico$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        limit: 10000
      });
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        "~": resolve("../jest-common/src")
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        version: JSON.stringify(version)
      })
    ]
  },
  //如果想要引入babel-polyfill可以这样写
  // configureWebpack: (config) => {
  //   config.entry = ["babel-polyfill", "./src/main.js"]
  // },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: pro ? true : false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://192.168.3.97:10110", // 域名
        ws: true, // 是否启用websockets
        changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRequiresRewrite: {
          "^/api": "/"
        }
      }
    } // 设置代理
  }
};
