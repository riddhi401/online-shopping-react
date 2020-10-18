import React, { createContext,useReducer } from 'react'
import {CartReducer} from "./CartReducer"


export  const AddCartContextData = createContext();

const CartContext = (props) => {

    const [state,dispatch] = useReducer(CartReducer,{shoppingCart:[],totalprice:0,qty:0});

    return (
        <div>
            <AddCartContextData.Provider value={{state,dispatch}}>
                {props.children}
            </AddCartContextData.Provider>
        </div>
    )
}


export default CartContext;