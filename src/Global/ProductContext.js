import React,{createContext,useState} from "react";
import iphone from "../image/iphone.jpg";
import headphones from "../image/headphones.jpg"
import microphone from "../image/microphone.jpg"
import rings from "../image/rings.jpg"
import shoes from "../image/shoes.jpg"
import watch from "../image/watch.jpg"
import perfum from "../image/perfume.jpg"
import dslr from "../image/dslr.jpg"

export const addproductContext = createContext();

const ProductContext = (props) =>{

    const [products] = useState([
        {id: 1, name: 'DSLR Camera', price: 40, image: dslr, Status: 'hot'},
        {id: 2, name: 'Perfume', price: 200, image: perfum,Status: 'new'},
        {id: 3, name: 'Watch', price: 300, image: watch,Status: 'new'},
        {id: 4, name: 'Shoes', price: 150, image: shoes,Status: 'new'},
        {id: 5, name: 'Microphone', price: 160, image: microphone,Status: 'hot'},
        {id: 6, name: 'Headphones', price: 500, image: headphones,Status: 'new'},
        {id: 7, name: 'Iphone X', price: 240, image: iphone,Status: 'hot'},
        {id: 8, name: 'Rings', price: 120, image: rings,Status: 'new'},
    ]);

    return(
            <addproductContext.Provider value={{products:[...products]}}>
                    {props.children}
            </addproductContext.Provider>
    )

}

export default ProductContext;