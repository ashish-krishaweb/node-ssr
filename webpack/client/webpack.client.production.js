const { merge } = require("webpack-merge")
const LoadablePlugin = require("@loadable/webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")   // This plugin is used to minify the css/scss files.
const TerserPlugin = require("terser-webpack-plugin") // This plugin is used to minify your JavaScript/Typescript files.

const baseConfig = require("../webpack.common")
const path = require("path")


const ROOT_DIR = path.resolve(__dirname, "../../")
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args)
const BUILD_DIR = resolvePath("build")



const clientConfig = {
   target: "web",
   mode: "production",
   entry: {
      client: "./src/client/index.jsx",
   },
   devtool: "source-map",
   resolve: {
      ...baseConfig.resolve,
   },
   module: {
      ...baseConfig.module,
      rules: [
         {
            test: /\.(css|scss|sass)$/,
            use: [MiniCssExtractPlugin.loader, {
               loader: "css-loader",
               options: {
                  sourceMap: false,
                }
            }],
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
            generator: {
               filename: 'assets/[id][ext]'
           }
         }
      ],
   },
   output: {
      path: resolvePath(BUILD_DIR, "client"),
      publicPath: "/client/",
      // Chunkhash is based on webpack entry point Each entry defined will have it’s own hash.
      // If anything changes for that particular entry point than only corresponding hash will change.
      // :8 is used to done slicing of hashes (eg: 8c4cbfdb instead of 8c4cbfdb91ff93f3f3c5).
      filename: "js/[name].[chunkhash:8].js",
      chunkFilename: "js/chunks/[name].[chunkhash:8].js",
      assetModuleFilename: "assets/[hash][ext][query]",
   },
   plugins: [
      ...baseConfig.plugins,
      new MiniCssExtractPlugin({
         filename: "css/[name].[chunkhash:8].css",
         // ignoreOrder: true,
      }),
      new LoadablePlugin({
         outputAsset: false,
         writeToDisk: true,
         filename: `${BUILD_DIR}/loadable-stats.json`,
      }),
      // Add any plugins required here for example: Bundle Analyzer, Copy Plugin etc
   ],
   optimization: {
      // runtimeChunk: "single", // creates a runtime file to be shared for all generated chunks.
      splitChunks: false,   // generate only one file js-bundle per route
      minimize: true,
      minimizer: [
         new CssMinimizerPlugin(),
         new TerserPlugin({
            minify: TerserPlugin.swcMinify,
            terserOptions: {
               format: {
                  comments: false, // It will drop all the console.log statements from the final production build,
               },
               mangle: true,
               compress: true,
               safari10: true,
               ecma: 2017
            },
            extractComments: true,
            exclude: [], // If you want to exclude any files so that it doesn't get minified.
         }),
      ],
   },
}

module.exports = merge(baseConfig, clientConfig)
