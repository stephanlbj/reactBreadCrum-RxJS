import { Link } from "react-router-dom"
import { Recipe } from "../../@types"


const ProductComponent = ({product}:{product:Recipe}) => {
  return (
    <>
    <Link to={`Product/${product.id}`} style={{outline:'none', color:'white'}}>
    <div className="Product">
    {
            product.image !== "" ? (
                
        <img
        src={product.image}
        width={`100%`}
        height={`70%`}
        style={{objectFit:'cover'}}
        />
        
            ) : <p>Image not available.</p>
        }

        {product.name && (
            <p>{product.name.slice(0,15)}...</p>
         )}
     
     
    </div>
    </Link>
    </>
  )
}

export default ProductComponent