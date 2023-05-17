import React, { useReducer } from 'react'
import { shoppingInitalState, shoppingReducer } from '../reducers/shoppingReducer'
import ProductItem from './ProductItem';

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitalState);
  const { products, cart } = state;

  //metodos
  const addToCart = () => {};
  const delFromCart = () => {};
  const clearCart = () => {};
  return (
    <div>
        <h2>Carrito de compras</h2>
        <h3>Productos</h3>
        <article className="box grid-responsive">
            {products.map((product) => <ProductItem key={product.id} data={product} addToCart={addToCart}/>)}
        </article>
        <h3>Carrito</h3>
        <article className="box">
          <button onClick={clearCart}>Limpiar Carrito</button>
        </article>
    </div>
  )
}

export default ShoppingCart