import React, { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext (null);
const getDefaultCart = () =>{
    let cart={};
    for (let index = 0; index < 300+1; index++) {
        cart[index]=0;            
    }
    return cart;
}


const ShopContextProvider =(props) =>{
    const [all_product,setAll_Product]= useState([]);
    const[cartItem, setcartItem] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))
    },[])

    const addToCart =(itemId) =>{
        setcartItem((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItem);

     }
    const removeFromCart =(itemId) =>{
        setcartItem((prev) => ({...prev,[itemId]:prev[itemId]-1}))
     }
     const getTotalCartAmount = ()  => {
        let totalAmount =0;
        for(const item in cartItem)
        {
            if(cartItem[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount =totalAmount + itemInfo.new_price * cartItem[item]
            }
        }
            return totalAmount.toFixed(2);
    }

        const getTotalCartItem=() =>{
            let totalItem=0;
            for(const item in cartItem)
            {
                if(cartItem[item]>0)
                {
                    totalItem=totalItem+cartItem[item];
                }
            }
            return totalItem;
        }
        
     
     const contextvalue = {  all_product: all_product,cartItem,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItem};
     return(
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export  default ShopContextProvider;