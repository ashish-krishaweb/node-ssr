import { Helmet } from "react-helmet-async"
import Footer from "../component/Footer"

export default function LoginPage() {
   return (
      <>
         <Helmet>
            <title>Login Page</title>
            <meta name="title" property="og:title" content="Login page" />
         </Helmet>
         <div>
            <h1>This is Login page of doom</h1>
         </div>
         <Footer />
      </>
   )
}
