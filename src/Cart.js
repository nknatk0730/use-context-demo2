import { useContext } from "react"
import { CartContext } from './CartContext'

export const Cart = () => {
  const { items } = useContext(CartContext)

  return (
    <div>
      <h1>Cart List</h1>
      {items.map((item) => (
        <p key={item.title}>
          {item.title}: ¥{item.price}
        </p>
      ))}
    </div>
  )
}