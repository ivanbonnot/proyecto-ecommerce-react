import { useState } from 'react';
import { Link } from "react-router-dom";
import './ItemCount.css'


const ItemCount = ({ initial, stock, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const Sumar = () => {
    setCounter(counter + 1);
  };
  const Restar = () => {
    setCounter(counter - 1)

  }

  return (

    <div className='count'>
      <p>Stock: {stock}</p>
      <button disabled={counter <= 1} onClick={Restar}>-</button>
      <span>{counter}</span>
      <button disabled={counter >= stock} onClick={Sumar}>+</button>
      <div>
        < Link to={"/cart"}>
          <button disabled={stock <= 0} onClick={() => onAdd(counter)} >Agregar al carrito</button>
        </Link>
      </div>

    </div>
  );
};

export default ItemCount;
