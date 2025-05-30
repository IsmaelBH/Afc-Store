// src/redux/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
}

export interface CartState {
    cartItems: CartItem[];
}

const initialState: CartState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.cartItems.push(action.payload);
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
