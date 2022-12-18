import express from "express"
import compression from "compression"
// import dotenv from "dotenv"

import htmlRenderer from "./htmlRenderer"

// dotenv.config()
const app = express()

if (process.env.NODE_ENV == "development") {
   const webpack = require("webpack")
   const WebpackHotMiddleware = require("webpack-hot-middleware")
   const WebpackDevMiddleware = require("webpack-dev-middleware")
   const webpackConfig = require("../../webpack/client/webpack.client.development")
   const compiler = webpack(webpackConfig)

   app.use(
      WebpackDevMiddleware(compiler, {
         publicPath: webpackConfig.output.publicPath,
         serverSideRender: true,
      })
   )

   app.use(WebpackHotMiddleware(compiler))
}

app.use(compression())
app.use(express.static("build"))

app.get("*", async (req, res) => {
   try {
      const { html, status } = await htmlRenderer(req)
      res.status(status).send(html)
   } catch (err) {
      console.log("error in server side render", err)
   }
})

app.listen(3000, () => {
   console.log("server running")
})
