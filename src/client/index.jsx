import "./style/index.css"
import { createRoot, hydrateRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { loadableReady } from "@loadable/component"
import { HelmetProvider } from "react-helmet-async"

import App from "./App"
import PagePropsCtxProvider from "./contexts/PagePropsCtx"

const root = createRoot(document.getElementById("root"))
const rootContent = document.getElementById("root")
let Element


const renderApp = () => {
   if (process.env.NODE_ENV == "development") {
      const { StrictMode } = require("react")
      Element = (
         <HelmetProvider>
            <StrictMode>
               <BrowserRouter>
                  <PagePropsCtxProvider value={window.__data}>
                     <App />
                  </PagePropsCtxProvider>
               </BrowserRouter>
            </StrictMode>
         </HelmetProvider>
      )
   } else {
      Element = (
         <HelmetProvider>
            <BrowserRouter>
               <PagePropsCtxProvider value={window.__data}>
                  <App />
               </PagePropsCtxProvider>
            </BrowserRouter>
         </HelmetProvider>
      )
   }

   // @ts-ignore
   if (module.hot) {
      root.render(Element)
   } else {
      hydrateRoot(rootContent, Element)
   }
}

loadableReady(() => {
   renderApp()
})

// @ts-ignore
if (module.hot) {
   // @ts-ignore
   module.hot.accept()
}
