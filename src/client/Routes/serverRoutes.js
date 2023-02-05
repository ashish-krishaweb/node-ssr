import loadable from "@loadable/component"
import { Navigate } from "react-router-dom"

const HomePage = loadable(() => import("../Pages/Home.page"))
const Login = loadable(() => import("../Pages/Login.page"))
const PageNotFound = loadable(() => import("../Pages/PageNotFound.page"))

export const serverRoutes = [
   {
      path: "/",
      element: HomePage,
      loadData: loadHomePage
   },
   {
      path: "/login",
      element: Login,
   },
   {
      path: "/signup",
      to: "/login",
      element: ({ to }) => <Navigate to={to} />,
   },
   {
      path: "*",
      element: PageNotFound,
   },
]


function loadHomePage(){
   let props = {
      title: "Awesome home page",
      description: "This is the desc for about the server side rendering with react and node.js"
   }

   return props

}