import { TYPES } from "./Action"

export const initialState = {
    dataReducer: [],
    dataCart: []
}

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_CART: {
            let newItem = state.dataReducer.products.find(product => product.id === action.payload)
            let itemInCart = state.dataCart.find(item => item.id === newItem.id)

            //en el retorno se fija si el item ya esta en el carrito, si esta le suma 1 a la cantidad, sino le asigna 1
            return itemInCart
                ? {
                    ...state,
                    dataCart: state.dataCart.map(
                        item => item.id === newItem.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                }
                :
                {
                    ...state,
                    dataCart: [...state.dataCart, { ...newItem, quantity: 1 }]
                }

        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.dataCart.find(item => item.id === action.payload)

            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    dataCart: state.dataCart.map(item =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                }
                :
                {
                    ...state,
                    dataCart: state.dataCart.filter(item => item.id !== action.payload)
                }
        }
        case TYPES.REMOVE_ALL_FROM_CART: {

        }
        case TYPES.CLEAR_CART: {
            console.log(state.dataCart)
            // return { 
            // }
        }

        default:
            return state
    }
} 