import { useContext } from "react";
import { CartContext } from './CartContext'

export const ProductCard = ({title, price}) => {
  const {addItems} = useContext(CartContext)
  
  return (
    <div>
      <p>{title}</p>
      <p>¥{price}</p>
      <button onClick={() => addItems(title, price)}>Add</button>
    </div>
  );
}
