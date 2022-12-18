const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { merge } = require("webpack-merge")
const webpackNodeExternals = require("webpack-node-externals")

const baseConfig = require("../webpack.common")

const ROOT_DIR = path.resolve(__dirname, "../../")
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args)
const BUILD_DIR = resolvePath("build")

const serverConfig = {
   target: "node",
   mode: "development",
   name: "server",
   entry: {
      server: "./src/server/index.js",
   },
   resolve: {
      ...baseConfig.resolve,
   },
   module: {
      ...baseConfig.module,
      rules: [
         {
            test: /\.(css|scss)$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
         },
      ],
   },
   plugins: [...baseConfig.plugins, new MiniCssExtractPlugin()],
   output: {
      path: BUILD_DIR,
      filename: "[name].js",
      libraryTarget: "commonjs2",
      chunkFilename: "chunks/[name].js",
      devtoolModuleFilenameTemplate: (info) => path.resolve(info.absoluteResourcePath).replace(/\\/g, "/"),
      assetModuleFilename: "assets/[hash][ext][query]",
      asyncChunks: true,
   },
   optimization: {
      moduleIds: "deterministic",
   },
   externals: [webpackNodeExternals()],
}
module.exports = merge(baseConfig, serverConfig)
