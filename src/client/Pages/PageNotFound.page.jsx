import { Helmet } from "react-helmet-async"

export default function NotFoundPage() {
   return (
      <>
         <Helmet>
            <title>Page Not Found</title>
         </Helmet>
         <div>
            <h1>Page not found</h1>
         </div>
      </>
   )
}
