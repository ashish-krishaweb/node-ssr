const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const baseConfig = require("../webpack.common")
const { merge } = require("webpack-merge")
const { HotModuleReplacementPlugin } = require("webpack")
const LoadablePlugin = require("@loadable/webpack-plugin")

const ROOT_DIR = path.resolve(__dirname, "../../")
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args)
const BUILD_DIR = resolvePath("build")

const clientConfig = {
   target: "web",
   mode: "development",
   entry: {
      client: ["webpack-hot-middleware/client?reload=true&noInfo=true", "./src/client/index.jsx"],
   },
   devtool: "inline-cheap-module-source-map",
   devServer: {
      contentBase: "./build",
      compress: true,
      historyApiFallback: true,
      hot: true,
      open: false,
   },
   output: {
      path: resolvePath(BUILD_DIR, "client"),
      publicPath: "/client/",
      filename: "[name].js",
      chunkFilename: "[name].js",
      // Point sourcemap entries to original disk location (format as URL on Windows)
      devtoolModuleFilenameTemplate: (info) => path.resolve(info.absoluteResourcePath).replace(/\\/g, "/"),
      assetModuleFilename: "assets/[hash][ext][query]",
      asyncChunks: true,
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
   plugins: [
      ...baseConfig.plugins,
      new MiniCssExtractPlugin(),
      new HotModuleReplacementPlugin(),
      new LoadablePlugin({
         outputAsset: false,
         writeToDisk: true,
         filename: `${BUILD_DIR}/loadable-stats.json`,
      }),
   ],

   optimization: {
      runtimeChunk: "single", // creates a runtime file to be shared for all generated chunks.
      moduleIds: "deterministic",
      splitChunks: {
         chunks: "all", // This indicates which chunks will be selected for optimization.
         automaticNameDelimiter: "-",
         cacheGroups: {
            vendor: {
               // to convert long vendor generated large name into vendor.js
               test: /[\\/]node_modules[\\/]/,
               name: "vendor",
               chunks: "all",
            },
         },
      },
      minimize: false,
      minimizer: [],
   },
}
module.exports = merge(baseConfig, clientConfig)
