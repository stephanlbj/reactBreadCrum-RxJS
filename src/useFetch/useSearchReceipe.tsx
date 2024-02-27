import { useQuery } from "@tanstack/react-query"
import { searchURL } from "../Constant"



export const getReceipe = async (searchInput:string)=>{
     
    try {
        const req = await fetch(`${searchURL+searchInput}`)
        const response = await req.json()
        return response
    } catch (error) {
        if(error instanceof Error)
        throw new Error(error.message)
    } 

}


export const useSearchReceipe = (searchInput:string) =>{

    const {isPending, error, data} = useQuery({ queryKey: ['receipes', searchInput], 
    queryFn: ()=>getReceipe(searchInput),
    staleTime:1000 * 60 * 3
     }) 

   return {isPending, error, data}
}