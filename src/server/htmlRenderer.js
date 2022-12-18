import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom/server"
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server"
import { HelmetProvider } from "react-helmet-async"
import { matchRoutes } from "react-router-dom"
import { ServerStyleSheet } from "styled-components"
import path from "path"

import App from "../client/App"
import { serverRoutes } from "../client/Routes/serverRoutes"
import getHtml from "./html/getHtml"
import PagePropsCtxProvider from "../client/contexts/PagePropsCtx"

const loadableJson = path.resolve(__dirname, "./loadable-stats.json")

const status_codes = {
   "*": 404,
}
let router_ctx = {}
let matched_route
let sheet

export default async function htmlRenderer(req) {
   router_ctx = {}
   matched_route = matchRoutes(serverRoutes, req.url)

   // new logic
   // setting up the status code for response of the page
   if (matched_route[0].route.to) {
      router_ctx.status = 301
   } else {
      const path = matched_route[0].route.path
      router_ctx.status = status_codes[path] || 200
   }

   // old logic
   // setting up the status code for response of the page
   // matched_route = matchRoutes(serverRoutes, req.url)
   // if (matched_route) {
   //    const path = matched_route[0].route.path
   //    if (path == "*") {
   //       router_ctx.status = 404
   //    } else {
   //       if (matched_route[0].route.to) {
   //          router_ctx.status = 301
   //       } else {
   //          router_ctx.status = 200
   //       }
   //    }
   // } else {
   //    router_ctx.status = 404
   // }

   let page_props = undefined
   if (matched_route[0].route.loadData) {
      page_props = matched_route[0].route.loadData()
   }

   const extractor = new ChunkExtractor({
      statsFile: loadableJson,
      entrypoints: ["client"],
   })
   sheet = new ServerStyleSheet()
   const helmet_ctx = {}

   const content = renderToString(
      sheet.collectStyles(
         <ChunkExtractorManager extractor={extractor}>
            <StaticRouter location={req.url}>
               <HelmetProvider context={helmet_ctx}>
                  <PagePropsCtxProvider value={page_props}>
                     <App />
                  </PagePropsCtxProvider>
               </HelmetProvider>
            </StaticRouter>
         </ChunkExtractorManager>
      )
   )

   const preloadScriptTags = extractor
      .getLinkElements()
      .filter((s) => s.props.as != "style")
      .reduce((acc, value) => acc + renderToString(value), "")

   const htmlData = {
      page_props,
      children: content,
      title: helmet_ctx.helmet.title.toString(),
      meta: helmet_ctx.helmet.meta.toString(),
      styles: sheet.getStyleTags(),
      inlineStyles: await extractor.getInlineStyleTags(),
      scriptTags: extractor.getScriptTags(),
      preloadScriptTags,
   }

   return { html: getHtml(htmlData), status: router_ctx.status }
}
