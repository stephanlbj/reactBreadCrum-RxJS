import { useParams } from "react-router-dom"
 import { useEffect, useState } from "react"
import Wrapper from "../../components/Wrapper"
import ProductDetail from "../../components/Product/ProductDetail"
import HeaderComponent from "../../components/HeaderComponent"
import { useFetchSingleReceipe } from "../../useFetch/useFetchSingleReceipe"

 

const ProductPageID = () => {

    const {id} = useParams()
    const [ID,setID] = useState("")

    useEffect(()=>{
     if(id!== undefined) setID(id)
    },[id])

   const {data, error, isPending}=  useFetchSingleReceipe(ID)

   if(isPending){
    return <Wrapper label="Loading..."/>
   }

   if(error){
    return <Wrapper label={`${error.message}`}/>
   }


  return (
    <>
    <HeaderComponent/>
    <ProductDetail product={data}/>
    </>
  )
}

export default ProductPageID