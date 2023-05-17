import React, { useReducer } from 'react'
import { shoppingInitalState, shoppingReducer } from '../reducers/shoppingReducer'
import ProductItem from './ProductItem';
import CartItem from './CartItem';
import { TYPES } from '../actions/shoppingAction';

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitalState);
  const { products, cart } = state;

  //Acciones
  const addToCart = (id) => {
    //Agregar al carrito
    dispatch({type: TYPES.ADD_TO_CART, payload: id});
  };
  const delFromCart = () => {};
  const clearCart = () => {};
  return (
    <div>
        <h2>Carrito de compras</h2>
        <h3>Productos</h3>
        <article className="box grid-responsive">
            {products.map((product) => (<ProductItem key={product.id} data={product} addToCart={addToCart}/>))}
        </article>
        <h3>Carrito</h3>
        <article className="box">
          <button onClick={clearCart}>Limpiar Carrito</button>
          {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
        </article>
    </div>
  )
}

export default ShoppingCart