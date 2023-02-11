const path = require("path")
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
            use: ["style-loader", "css-loader","sass-loader"],
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
            generator: {
               filename: './client/assets/[name][ext]'
           }
         }
      ],
   },
   plugins: [...baseConfig.plugins],
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
