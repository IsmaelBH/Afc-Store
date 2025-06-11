import { createSlice } from '@reduxjs/toolkit';

interface UserState {
    email: string | null;
    idToken: string | null;
    localId: string | null;
    fullName?: string | null; // ✅ Agregado
}

const initialState: UserState = {
    email: null,
    idToken: null,
    localId: null,
    fullName: null, // ✅ Inicializado
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.idToken = action.payload.idToken;
            state.localId = action.payload.localId;
            state.fullName = action.payload.fullName || null; // ✅ Nuevo campo
        },
        logout: (state) => {
            state.email = null;
            state.idToken = null;
            state.localId = null;
            state.fullName = null; // ✅ También lo limpiamos
        },
    },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
