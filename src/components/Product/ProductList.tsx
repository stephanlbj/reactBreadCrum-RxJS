import { Root } from "../../@types"
import { useSearchContext } from "../../Context/SearchContext"
import Wrapper from "../Wrapper"
import ProductComponent from "./Products"



const ProductList = ({data}:{data:Root}) => {
 
  const {search} = useSearchContext()

  if(search?.recipes.length === 0)
  return <Wrapper label="No result found."/>



  return (
    <div className="ProductList">
        {
            data.recipes.map((recipes)=>{
                return <ProductComponent 
                key={recipes.id}
                product={recipes} />
            })
        }
    </div>
  )
}

export default ProductList