import { createContext, useContext } from "react"

const PagePropsCtx = createContext({})
export const usePagePropsCtx = () => useContext(PagePropsCtx)

export default function PagePropsCtxProvider({children, value}){
   return(
      <PagePropsCtx.Provider value={value}>
         {children}
      </PagePropsCtx.Provider>
   )
}