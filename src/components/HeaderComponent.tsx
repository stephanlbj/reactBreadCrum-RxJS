import BackBtn from "./BackBtn"
import {MdOutlineCancel}  from "../Icons/index"
import { useParams } from "react-router-dom"
import { useCartContext } from "../Context/CartItemContext"
import { useskipPageContext } from "../Context/SkipPageContext"





const HeaderComponent = () => {
  const {cart, resetCart} = useCartContext()
  const {skipPage} =useskipPageContext()
  
    

    const params = useParams()
    const isParam = Object.keys(params)
     

    const cartNumber = ()=>{
      return cart.reduce((acc, curr)=>{
       return acc+= curr.qty
      },0)
  }
  


    if(skipPage === 0 && cart.length === 0)
    return null

  

  return (
    <div className={`${ skipPage > 0 && cart.length > 0 ? "styleWithSpaceBetween":
    skipPage === 0 && cart.length > 0  ? "styleJustifyEnd" : 
    skipPage > 0 && cart.length === 0  ? "styleJustifyStart" : "styleJustifyEnd"
    }`} >

       
     
     {
        skipPage > 0 && isParam.length === 0 ? (<BackBtn />) : <div></div>
     }
     

        {
            cart.length > 0 && <div style={{display:'flex', alignItems:'center', 
            flexDirection:'row', 
            gap:8}}>
                <p style={{border:'1px solid gray', 
            padding: '0 14px', cursor:'pointer'}}>Cart: {cartNumber()}</p>

            {/*remove cart button*/}
            <div onClick={resetCart}
            style={{cursor:'pointer' }}>
                <MdOutlineCancel/>
            </div>



            </div>
        }
    </div>
  )
}

export default HeaderComponent