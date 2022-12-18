import { Route, Routes } from "react-router-dom"
import { serverRoutes } from "./serverRoutes"

export default function ClientRoutes() {
   return (
      <Routes>
         {serverRoutes.map((route) => {
            if (route.to) {
               return <Route path={route.path} element={<route.element to={route.to} />} key={route.path} />
            }
            return <Route path={route.path} element={<route.element />} key={route.path} />
         })}
      </Routes>
   )
}
