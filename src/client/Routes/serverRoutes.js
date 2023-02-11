import loadable from "@loadable/component"
import { Navigate } from "react-router-dom"

// page loaders
import CommonPageLoader from "../PageLoaders/CommonLoader"

// pageProps fetcher imports
import homePagePropsFetcher from "../PagePropsFetcher/HomePage.fetcher"


// page imports
const HomePage = loadable(() => import("../Pages/Home.page"), {fallback: CommonPageLoader})
const Login = loadable(() => import("../Pages/Login.page"), {fallback: CommonPageLoader})
const LoadPage = loadable(() => import("../Pages/Load.page"), {fallback: CommonPageLoader})
const PageNotFound = loadable(() => import("../Pages/PageNotFound.page"), {fallback: CommonPageLoader})


// define all of the routes of the application
export const serverRoutes = [
   {
      path: "/",
      element: HomePage,
      loadData: homePagePropsFetcher
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
      path: "/load",
      element: LoadPage
   },
   {
      path: "*",
      element: PageNotFound,
   },
]