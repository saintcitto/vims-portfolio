const path = require("path");

module.exports = {
  transpileDependencies: true,
  devServer: {
    host: "localhost",
    port: 8080,
    open: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@components": path.resolve(__dirname, "src/components"),
        "@assets": path.resolve(__dirname, "src/assets"),
      },
    },
  },
  productionSourceMap: false,
  css: {
    extract: true,
  },
  lintOnSave: "warning",
};
