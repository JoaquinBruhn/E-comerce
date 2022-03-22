import React from "react";

const Cart = () => {

    const purchases =["product 1", "product 2", "product 3", "product 4", "product 5", "product 6",]

  return (
    <>
      <h3>This is the cart</h3>
      <ul>
        {purchases.map((el)=>{
            return(
            <li>
                {el}
            </li>)
        })}
      </ul> 
    </>
  );
};

export default Cart;