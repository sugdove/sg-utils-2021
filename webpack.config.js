const path = require("path");

module.exports = {
  // 模式
  // mode: "development", // 开发模式
  mode: "production",  // 生产模式
  // 入口
  entry: "./src/main.js",
  // 出口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "sg-utils.min.js",
    library: "sgUtils",
    libraryTarget: "umd",  //针对 esm / commonjs / 
  },
};
