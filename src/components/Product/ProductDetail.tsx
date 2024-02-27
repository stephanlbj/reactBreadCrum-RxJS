import { Link, useLocation, useNavigate} from "react-router-dom"
import { Recipe } from "../../@types"
import {  useEffect, useState } from "react"
import { useCartContext } from "../../Context/CartItemContext"


const ProductDetail = ({product}:{product:Recipe}) => {


   const {addToCart, cart, removeFromCart} = useCartContext()
   const navigate = useNavigate()

   const {pathname} = useLocation()
   
   const [count, setCount] = useState(0)
   //return truthy values
   const paths = pathname.split('/').filter((path)=>path)

  let breadCrum = ""
  
 
  useEffect(()=>{
     if(product.id){

      let foundItem = cart.find((item)=>item.id===product.id)
      if(foundItem){
        setCount(foundItem.qty)
      }else {
        setCount(0)
      }
     }
  },[product.id, cart])
  
  
 
 
 
  
    
  return (
    <>
   
   

   <button  style={{cursor:'pointer', marginLeft:10}}
   onClick={()=>navigate(-1)}>
   Back
   </button>

      <p style={{textAlign:'center', fontSize:20}}>Product Details</p>
    
    <p style={{textAlign:'center', fontSize:15}}>Home
        {
          paths.length > 0 &&   paths.map((path, index)=>{
                breadCrum += `/${path}`
              
            
                return  <span 
                      style={ index === 0 ? { color: 'green' } : {}}
                 
                      key={index}>
                     /{  index === 0 ? <Link to={`/`} 
                     style={{textDecoration:'none', color:"green", cursor:'pointer'}}>{path}
                     </Link> : path}</span>
           })
           
        }
    </p>


    <div  className="containerReceipePage">
        {
            product.image!==""  ? (
               <div style={{border:'1px solid gray', width:'70%', padding:8, borderRadius:8}}>
                 <img
                width={`100%`}
                height={300}
                alt={`${product.name}`}
                src={product?.image}
                
                style={{objectFit:'cover'}}
                />
              </div>
            ) : <p>No image available</p>
        }

        <div  style={{width:'80%', padding:8, display:'flex', 
        flexDirection:'column', justifyContent:'center', gap:4}} >
        <p style={{fontSize:24}}>Product Name: 
        <span style={{fontSize:15, paddingLeft:10}}>{product.name}</span></p>
       
       {
        product.mealType && product.mealType.length > 0 ? (
          <p style={{fontSize:24}}>Description: 
          <span style={{fontSize:15, paddingLeft:10}}>{product.mealType[0]}</span></p>
         
        ) : <p style={{fontSize:24}}>Description: 
        <span style={{fontSize:15, paddingLeft:10}}>{product.mealType}</span></p>
       
       }

        
        <p style={{fontSize:24}}>Cuisine: 
        <span style={{fontSize:15, paddingLeft:6}}> {product.cuisine}</span></p>
       

       <div style={{display:'flex', flexDirection:'row', gap:10, height:30,
       width:'100%',  alignItems:'center',  
       justifyContent:'center'}}> 
      
      <button
       style={{cursor:'pointer' , width:30, height:30, display:'flex',
       placeItems:'center' , justifyContent:'center'}}
       onClick={()=>removeFromCart(product.id)}>-</button>
      
      
       <p >{count}</p>

       <button
       style={{cursor:'pointer' , width:30, height:30, display:'flex',
       placeItems:'center' , justifyContent:'center'}}
       onClick={()=>addToCart(product.id)}>+</button>
        
       
       
       </div>
        </div>

    </div>
    </>
  )
}

export default ProductDetail