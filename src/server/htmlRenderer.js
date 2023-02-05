import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom/server"
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server"
import { HelmetProvider } from "react-helmet-async"
import { matchRoutes } from "react-router-dom"
import { ServerStyleSheet } from "styled-components"
import { resolve } from "path"

import App from "../client/App"
import { serverRoutes } from "../client/Routes/serverRoutes"
import getHtml from "./html/getHtml"
import PagePropsCtxProvider from "../client/contexts/PagePropsCtx"

const loadableJson = resolve(__dirname, "./loadable-stats.json")

const status_codes = {
   "*": 404,
}

export default async function htmlRenderer(req, scriptNonce) {
   const router_ctx = {}
   const extractor = new ChunkExtractor({
      statsFile: loadableJson,
      entrypoints: ["client"],
   })
   const matched_route = matchRoutes(serverRoutes, req.url)

   // new logic
   // setting up the status code for response of the page
   if (matched_route[0].route.to) {
      router_ctx.status = 301
   } else {
      const path = matched_route[0].route.path
      router_ctx.status = status_codes[path] || 200
   }

   let page_props = undefined
   if ("loadData" in matched_route[0].route && typeof matched_route[0].route.loadData == "function") {
      page_props = matched_route[0].route.loadData()
   }

   const sheet = new ServerStyleSheet()
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

   // const preloadScriptTags = extractor
   //    .getLinkElements()
   //    .filter((s) => s.props.as != "style")
   //    .reduce((acc, value) => acc + renderToString(value), "")

   const htmlData = {
      page_props,
      children: content,
      title: helmet_ctx.helmet.title.toString(),
      meta: helmet_ctx.helmet.meta.toString(),
      styles: sheet.getStyleTags(),
      inlineStyles: await extractor.getInlineStyleTags({ nonce: scriptNonce }),
      scriptTags: extractor.getScriptTags({ nonce: scriptNonce }),
      scriptNonce,
      // preloadScriptTags,
   }

   return { html: getHtml(htmlData), status: router_ctx.status }
}
