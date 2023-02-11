import Link from "react-ripples-hover/dist/Components/Link"
import Button from "../component/Button"
import HelmetMetaTags from "../component/HelmetMetaTags"
import { usePagePropsCtx } from "../contexts/PagePropsCtx"

export default function HomePage() {
   const props = usePagePropsCtx()

   return (
      <>
         <HelmetMetaTags title={props?.title} description={props?.description} image={props?.image}/>
         <div>
            <h1>This is home page</h1>
            <button onClick={() => console.log("ok")}>click me</button>
            <Link variant="primary">Home</Link>
         </div>
         <Button />
      </>
   )
}