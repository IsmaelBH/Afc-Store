// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

// Tipos de ayuda para usar con TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
