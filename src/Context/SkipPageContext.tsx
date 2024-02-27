import { createContext, useCallback, useContext, useState } from "react";


type initialSkipContext ={
    removeSkipPage: () => void
    addSkipPage: () => void
    skipPage: number
}

type skipPageContextProviderProps ={
    children:React.ReactNode
}

 
export const SkipPageContext = createContext({} as initialSkipContext)


export const SkipPageContextProvider = ({children}:skipPageContextProviderProps)=>{

    const [skipPage, setSkipPage] = useState(0)

    const addSkipPage = useCallback(()=>{
        
        setSkipPage((prev)=>prev+10)
      
    },[setSkipPage])

    const removeSkipPage = useCallback(()=>{
        
        setSkipPage((prev)=>{
            if(prev===0) return 0
            return prev -10
        })
    },[setSkipPage])

   

     


    return (
       <SkipPageContext.Provider value={{skipPage, addSkipPage, removeSkipPage}}>
        {children}
       </SkipPageContext.Provider>
    )
}

export const useskipPageContext = ()=>useContext(SkipPageContext)