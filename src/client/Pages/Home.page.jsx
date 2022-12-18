import { Helmet } from "react-helmet-async"
import { usePagePropsCtx } from "../contexts/PagePropsCtx"

export default function HomePage() {
   const props = usePagePropsCtx()

   return (
      <>
         <Helmet>
            <title>{props?.title || "Home page Default"}</title>
            <meta name="title" property="og:title" content="Home page" />
         </Helmet>
         <div>
            <h1>This is home page</h1>
            <button onClick={() => console.log("ok")}>click me</button>
         </div>
      </>
   )
}
