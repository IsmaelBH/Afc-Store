import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    email: string;
    idToken: string;
    localId: string;
}

const initialState: AuthState = {
    email: '',
    idToken: '',
    localId: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<AuthState>) => {
            return action.payload;
        },
        logout: () => initialState,
    },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
