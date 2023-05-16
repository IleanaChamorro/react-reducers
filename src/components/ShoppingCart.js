import React, { useReducer } from 'react'
import { shoppingInitalState, shoppingReducer } from '../reducers/shoppingReducer'

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitalState);
  const { products, cart } = state;
  return (
    <div>
        <h2>Carrito de compras</h2>
        <h3>Productos</h3>
        <article className="box">

        </article>
        <h3>Carrito</h3>
        <article className="box"></article>
    </div>
  )
}

export default ShoppingCart