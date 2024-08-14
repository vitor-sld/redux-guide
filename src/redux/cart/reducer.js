
import cartActionTypes from "./action-types"

const initialState = {
    products: [],
    totalPriceOfProducts: 0,
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case cartActionTypes.ADD_PRODUCTS:
        return {
            ...state, products: [...state.products, action.payload],
        }

        default:
            return state
    }
}

export default cartReducer