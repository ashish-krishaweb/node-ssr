import { Helmet } from "react-helmet-async"

export default function NextLink({ href }) {
   return (
      <Helmet>
         <link rel="preload" as="style" href={href} />
         <link rel="stylesheet" href={href} />
      </Helmet>
   )
}
