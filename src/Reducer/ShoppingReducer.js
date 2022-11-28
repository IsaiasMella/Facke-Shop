import { TYPES } from "./Action"

export const initialState = {
    dataReducer: [],
    dataCart: []
}

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_CART: {
            let newItem = state.dataReducer.products.find(product => product.id === action.payload)
            return{
                ...state,
                dataCart: [...state.dataCart, newItem]
            }
        }
        case TYPES.REMOVE_ONE_FROM_CART: {

        }
        case TYPES.REMOVE_ALL_FROM_CART: {

        }
        case TYPES.CLEAR_CART: {

        }

        default:
            return state
    }
} 