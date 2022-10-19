import { useState } from 'react';
import './Counter.css'


const Counter = ({initial , stock, onAdd}) => {
  const [counter, setCounter] = useState(initial);

  const Sumar = () => {
    setCounter(counter + 1);   
  };
  const Restar = () =>{
    setCounter(counter - 1)

  } 

  return (

    <div className='count'>
    <button disabled={counter <= 1} onClick={Restar}>-</button>
  <span>{counter}</span>
    <button disabled={counter >= stock} onClick={Sumar}>+</button>  
    <div>
    <button disabled={stock <= 0} onClick={() => onAdd(counter)} >Agregar al carrito</button>
    </div>

    </div>
  );
};

export default Counter;
