import { useQuery } from "@tanstack/react-query"
import { singleProductURL } from "../Constant"



const getSingleReceipe = async (id:string)=>{
     
    try {
        const req = await fetch(`${singleProductURL+id}`)
        const response = await req.json()
        return response
    } catch (error) {
        if(error instanceof Error)
        throw new Error(error.message)
    } 

}


export const useFetchSingleReceipe = (id:string) =>{

    const {isPending, error, data} = useQuery({ queryKey: ['receipe', id], 
    queryFn: ()=>getSingleReceipe(id),
    staleTime:1000 * 60 * 3
     }) 

   return {isPending, error, data}
}