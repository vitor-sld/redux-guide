import cartActionTypes from "./action-types"

export const addCart = (payload) => ({
        type: cartActionTypes.ADD_PRODUCTS,
        payload
})

export const removeCart = (payload) => ({
        type: cartActionTypes.REMOVE_PRODUCTS,
        payload
})

export const increaseProducts = (payload) => ({
        type: cartActionTypes.INCREASE_PRODUCTS,
        payload
})
export const decreaseProducts = (payload) => ({
        type: cartActionTypes.DECREASE_PRODUCTS,
        payload
})