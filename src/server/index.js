import express from "express"
import compression from "compression"
import helmet from "helmet";
import crypto from "crypto"

// import dotenv from "dotenv"

import htmlRenderer from "./htmlRenderer"

// dotenv.config()
const app = express()

// Generating a nonce for Lodash with crypto
let scriptNonce = crypto.randomBytes(16).toString("hex")



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
app.use(
   helmet({
     contentSecurityPolicy: {
      directives:{
         scriptSrc: [
            "'strict-dynamic'", // For nonces to work
            `'nonce-${scriptNonce}'`,   // adding the nonce

            "'unsafe-inline'",      // for backwarc browsers compatibilty
            "https:"    // for backwarc browsers compatibilty
        ],
        scriptSrcAttr: null, // Remove Firefox warning
        styleSrc: [
         "'strict-dynamic'", // For nonces to work
         `'nonce-${scriptNonce}'`,     // adding the nonce

         "'unsafe-inline'",    // for backwarc browsers compatibilty
         "https:"    // for backwarc browsers compatibilty
     ], // Remove 'unsafe-inline'
      }
     },
     crossOriginEmbedderPolicy: false,
     crossOriginOpenerPolicy: {
       policy: "same-origin-allow-popups",
     },
     hidePoweredBy: true,
     xssFilter: true,
   })
 )
app.use(compression())
app.use(express.static("build"))

app.get("*", async (req, res) => {
   try {
      const { html, status } = await htmlRenderer(req, scriptNonce)
      res.status(status).send(html)
   } catch (err) {
      console.log("error in server side render", err)
   }
})

app.listen(3000, () => {
   console.log("server running")
})
