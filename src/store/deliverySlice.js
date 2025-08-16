import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subTotalPrice: 0,
    discount: 0,
    totalPrice: 0,
};

// Load persisted state
const savedCartData = localStorage.getItem("cartData");
const persistedState = savedCartData ? JSON.parse(savedCartData) : initialState;

const deliverySlice = createSlice({
    name: "delivery",
    initialState: persistedState,
    reducers: {
        addCartData: (action) => {
            // Option 1: replace whole state
            localStorage.setItem("cartData", JSON.stringify(action.payload));
            return action.payload;
        },
    },
});

export const { addCartData } = deliverySlice.actions;
export default deliverySlice.reducer;
