import cartActionTypes from "./action-types"

export const addCart = (payload) => ({
        type: cartActionTypes.ADD_PRODUCTS,
        payload
})