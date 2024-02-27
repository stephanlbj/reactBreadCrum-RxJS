import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { baseURL } from "../Constant"



const getReceipes = async (skip:number)=>{
     
    try {
        const req = await fetch(`${baseURL+skip}`)
        const response = await req.json()
        return response
    } catch (error) {
        if(error instanceof Error)
        throw new Error(error.message)
    } 

}


export const useFetchReceipes = (skip:number) =>{

    const {isPending, error, data} = useQuery({ queryKey: ['receipes', skip], 
    queryFn: ()=>getReceipes(skip),
    placeholderData:keepPreviousData,
    staleTime:1000 * 60 * 3 }) 

   return {isPending, error, data}
}