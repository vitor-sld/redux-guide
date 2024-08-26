
import cartActionTypes from "./action-types"

const initialState = {
    products: [],
    totalPriceOfProducts: 0,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case cartActionTypes.ADD_PRODUCTS:

            const productIsAlreadyInCart = state.products.some((product) =>
                product.id === action.payload.id
            )

            if (productIsAlreadyInCart) {
                return {
                    ...state, products: state.products.map((product) => product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product),
                }
            }
            return {
                ...state, products: [
                    ...state.products,
                    { ...action.payload, quantity: 1 }
                ],
            }

        case cartActionTypes.REMOVE_PRODUCTS:
            return {
                ...state, products: state.products.filter((product) => product.id !== action.payload)
            }

        case cartActionTypes.INCREASE_PRODUCTS:
            return {
                ...state, products: state.products.map((product) => product.id === action.payload ? { ...product, quantity: product.quantity + 1 } : product)
            }
            
        case cartActionTypes.DECREASE_PRODUCTS:
                return {
                    ...state, products: state.products.map((product) => product.id === action.payload ? { ...product, quantity: product.quantity - 1 } : product).filter(product => product.quantity >0)
                } 
        default:
            return state
    }
}

export default cartReducer

