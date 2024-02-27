import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Root } from "../@types";


type initialSearchContext ={
    handleSearch: (value: Root | null) => void
    search: Root | null
    InputRef: React.RefObject<HTMLInputElement>
    handleInputValue: (value: string) => void
    inputValue: string
}

type SearchContextProviderProps ={
    children:React.ReactNode
}

 
export const SearchContext = createContext({} as initialSearchContext)


export const SearchContextProvider = ({children}:SearchContextProviderProps)=>{

    const [search, setSearch] = useState<Root | null>(null);
    const InputRef = useRef<HTMLInputElement>(null)
    const [inputValue, setInputValue] = useState("");

    useEffect(()=>{
    if(InputRef.current?.value===""){
        setSearch(null)
    }
    },[InputRef.current?.value, search])


  
    const handleSearch = useCallback((value:Root | null)=>{
        
        setSearch(value)
      
    },[setSearch])

    const handleInputValue = useCallback((value:string)=>{
        
        setInputValue(value)
      
    },[setInputValue])

 

 

     


    return (
       <SearchContext.Provider value={{search, handleSearch, InputRef, 
        inputValue,
       handleInputValue}}>
        {children}
       </SearchContext.Provider>
    )
}

export const useSearchContext = ()=>useContext(SearchContext)