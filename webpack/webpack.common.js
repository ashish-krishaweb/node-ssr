const { ProvidePlugin } = require("webpack")
const Dotenv = require("dotenv-webpack")
const path = require("path")

const scriptRegExtensions = /\.(js|jsx|mjs)/
const imgRegExtensions = /\.(png|jpg|jpeg)/
const fontRegExtensions = /\.(eot|otf|ttf|woff|woff2)/

module.exports = {
   resolve: {
      extensions: [".js", ".jsx", "mjs"],
   },
   plugins: [
      // making React accessible everywhere in code without being declared or import
      // making it global
      new ProvidePlugin({
         React: "react",
      }),
      // setting the support of .env files in react app and also providing the support of process.env.
      new Dotenv({
         path: path.resolve(__dirname, "..", ".env"),
      }),
   ],
   module: {
      rules: [
         {
            test: scriptRegExtensions,
            exclude: /node_mudles/,
            use: "babel-loader",
         },
         {
            test: fontRegExtensions,
            type: "asset",
         },
         {
            test: /\.svg/,
            type: "asset/inline",
         },
         {
            test: imgRegExtensions,
            type: "asset/resourse",
         },
      ],
   },
}
