// rafc - metodo avrebiado create React Arrow Function Component

import { useState } from "react";



import './ItemCounter.css';

interface Props{
    name: string;
    quantity?: number;
} 

export const ItemCounter = ({ name, quantity = 1}: Props) => {

  const [count, setCount] = useState(quantity);

  const handleAdd = () =>{
    setCount(count + 1);    
     console.log('Agregar +1 a ', name);
  }

  const handleSubtract = () =>{
    if (count === 1) return;
    setCount(count - 1);    
     console.log('Substraer -1 a ', name);
  }


  return (
    <section 
    className="item-row"
        // style = {{
        //     display: 'flex',
        //     alignItems: 'center',
        //     gap: 10,
        //     marginTop:10,
        // }}
    >
        <span
           className="item-text"
           style ={{            
            color: count === 1 ? 'red' : 'blue',
           }}
           >
            {name}
        </span>
        <button
          onMouseEnter={ () =>{
            console.log(`Mouse Enter ${name}`)
          }

          }
          onClick = { () => { 
            handleAdd();
          }}
        >+1</button>
        <span>{count}</span>
        <button
          onClick = { () => { 
            handleSubtract();
          }}>-1</button>

    </section>
  )
}

