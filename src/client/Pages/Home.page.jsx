import { Helmet } from "react-helmet-async"
import { usePagePropsCtx } from "../contexts/PagePropsCtx"

export default function HomePage() {
   const props = usePagePropsCtx()
   console.log(props)

   return (
      <>
         <Helmet>
            <title>{props?.title || "Home page Default"}</title>
            <meta name="title" property="og:title" content="Home page" />
            {props?.description && <meta name="description" property="og:description" content={props?.description} /> }
            {props.image && <meta name="image" property="og:image" content={props.image}/>}
            {props.image && <link rel="shortcut icon" href={props.image} type="image/x-icon" />}
            
         </Helmet>
         <div>
            <h1>This is home page</h1>
            <button onClick={() => console.log("ok")}>click me</button>
         </div>
      </>
   )
}

HomePage.getServerSideProps = () =>{
   return new Promise((res, rej) => res({
      title: "Awesome home page",
      description: "This is the desc for about the server side rendering with react and node.js",
      image: "client/assets/download.jpeg"
   }))
}
