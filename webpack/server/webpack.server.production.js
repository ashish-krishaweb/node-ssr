const { merge } = require("webpack-merge")
const baseConfig = require("../webpack.common")
const webpackNodeExternals = require("webpack-node-externals")
const LoadablePlugin = require("@loadable/webpack-plugin")

const path = require("path")
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
               filename: './client/assets/[id][ext]'
           }
         }
      ],
   },
   plugins: [...baseConfig.plugins],
   output: {
      path: BUILD_DIR,
      filename: "index.js",
      libraryTarget: "commonjs2",
      chunkFilename: "chunks/[name].js",
      assetModuleFilename: "assets/[hash][ext][query]",
      asyncChunks: true,
   },
   optimization: {
      moduleIds: "deterministic",
      minimize: false,
   },
   externals: [webpackNodeExternals()],
}

module.exports = merge(baseConfig, serverConfig)
