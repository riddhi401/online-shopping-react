import React,{useContext} from 'react';                     
import {addproductContext} from "../Global/ProductContext";
import {AddCartContextData} from "../Global/CartContext";
import Banner from "./Banner"


const Product = () => {

  const data = [];
   const {products} = useContext(addproductContext);
  //  const data = useContext(AddCartContextData);
  //  console.log("Data Varibales",data);
    
      return(
        
      <div className="container">
        <Banner/>
        <div className="products">
        {products.map(product => (
            <div className="product" key={product.id}>
              <div className="pro">
            <div className="productImage">
              <img src={product.image} alt="Not found"/>
            </div>
            <div className="productDetails">
                <div className="proName">
                 <h4>{product.name}</h4>
                </div>
               <div className="proPrice">
                   ${product.price}.00
               </div>
            </div>
            </div>

            <div className="add-to-cart">Add To Cart</div>
            
            {product.Status === 'hot' ? <div className="hot">hot</div> : ''}
            {product.Status === 'new' ? <div className="new">new</div> : ''}
            </div>
        ))}
        </div>
      </div>

      
      
      )


}

export default Product;