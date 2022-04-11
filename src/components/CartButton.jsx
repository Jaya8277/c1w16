import React,{useState} from 'react';
// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    const [count,setCount] = useState(0)

    const Increment = (value)=>{

      setCount(count+value)
    }
  return <>
  {/* add to cart button */}

  {/* count with - and  + button */}
  <div>
      <button>Add to Cart</button>
      <p className="count-item">{count}</p>
      {/* <button onclick={()=>{Increment(1)}}>+</button>

      <button onclick={()=>{Increment(-1)}}>-</button> */}
      <button id="one" onClick={()=>Increment(1)}>+</button>
               <button onClick={()=>Increment(-1)}>-</button>
  </div>
  </>;
};
export default CartButton
