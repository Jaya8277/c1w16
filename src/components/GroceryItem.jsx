import React from "react";
import CardButton from "./CartButton";
// reusable card component

const GroceryItem = (props) => {
  return <>


<div className="Divitem">

<img src={props.imgURL} alt=""/>
    <h4>{props.title}</h4>
    <h4>Discount :{props.discount}</h4>
    <div id ="cart11">
   <p className="one1">mrp : {props.mrp}</p>
   <p className="one1">Price : {props.sellingPrice}</p>
    </div>

    <div id="btn">
      <CardButton/>
    </div>
    </div>
    

   

  </>;
   
  
  
};
export default GroceryItem;
