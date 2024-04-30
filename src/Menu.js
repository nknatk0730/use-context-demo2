import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from './CartContext'

export const Menu = () => {
  const state = useContext(CartContext);

  return (
    <div>
      <nav>
        <Link to='/'>TITLE</Link>
        <Link to='/cart'>
          Cart: <span>{state.items.length}</span>
        </Link>
      </nav>
    </div>
  )
}