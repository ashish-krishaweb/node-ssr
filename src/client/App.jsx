import Header from "./component/Header"
import ClientRoutes from "./Routes/Routes"
// @ts-ignore
import Car from "./assets/download.jpeg"

export default function App() {
   return (
      <>
         <Header />
         <ClientRoutes />
         <div>i am the king of this world.</div>
         <h1>Awesome server side rendering</h1>
         <img src={Car} alt="car" height={'275'} width={'183'} />
      </>
   )
}
