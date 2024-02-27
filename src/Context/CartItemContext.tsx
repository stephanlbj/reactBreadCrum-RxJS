import { createContext, useCallback, useContext, useState } from "react";
import { toast } from "react-toastify";

type initialCartContext ={
    addToCart: (ID: number) => void
    cart: cartType[]
    removeFromCart: (ID: number) => void
    resetCart: () => void
}

type CardContextProviderProps ={
    children:React.ReactNode
}

type cartType = {
    id:number 
    qty:number
}
export const CartContext = createContext({} as initialCartContext)


export const CardContextProvider = ({children}:CardContextProviderProps)=>{

    const [cart, setCart] = useState<cartType[]>([])

    const addToCart = useCallback((ID:number)=>{
        
        setCart((prev)=>{
            if(prev.find((item)=>item.id===ID)=== undefined){
               return [...prev, {id:ID,qty:1}]
            }else{
                return prev.map((item)=>{
                    if(item.id===ID){
                        return {
                            ...item, qty:item.qty+1
                        }
                    }
                    else {
                        return item
                    }
                })
            }
        })
      
    },[setCart])

    const removeFromCart = useCallback((ID:number)=>{
        
        setCart((prev)=>{
            if(prev.find((item)=>item.id===ID)?.qty=== 1){
               return prev.filter((prevItem)=>prevItem.id!==ID)
            }else{
                return prev.map((item)=>{
                    if(item.id===ID){
                        return {
                            ...item, qty:item.qty - 1
                        }
                    }
                    else {
                        return item
                    }
                })
            }
        })
      
    },[setCart])

    const resetCart = useCallback(()=>{
        toast.success("Cart was emptied.")
        setCart([])
    },[setCart])

     


    return (
        <CartContext.Provider value={{addToCart, cart, removeFromCart, resetCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = ()=>useContext(CartContext)