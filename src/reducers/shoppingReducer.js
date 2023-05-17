import { TYPES } from "../actions/shoppingAction";

export const shoppingInitalState = {
    products: [
        {id: 1, name: "Producto 1", price: 100},
        {id: 2, name: "Producto 2", price: 200},
        {id: 3, name: "Producto 3", price: 300},
        {id: 4, name: "Producto 4", price: 400},
        {id: 5, name: "Producto 5", price: 500},
        {id: 6, name: "Producto 6", price: 600},
    ],
    cart:[]
};

export function shoppingReducer(state, action){
    switch (action) {
        case TYPES.ADD_TO_CART:{
            //buscar id en lista de productos y guardarlo en una variable
            let newItem = state.products.find((product) => product.id === action.payload);

            //console.log(newItem);

            let itemInCart = state.cart.find(item => item.id === newItem.id);

            return itemInCart ? {
                //cuando la variable item tenga algo generar un map para sumarle uno al que coincida
                ...state, 
                cart: state.cart.map((item) => item.id === newItem.id ? {...item, quantity: item.quantity + 1} : item)
            } : {
                ...state,
                cart: [...state.cart, {...newItem, quantity: 1}]
            }
            //Retornar el estado en la propiedad cart es igual al nuevo item 
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
            
        }
        case TYPES.REMOVE_ALL_FROM_CART:{
            
        }
        case TYPES.CLEAR_CART:{
            
        }
        default: 
            return state
    }
}