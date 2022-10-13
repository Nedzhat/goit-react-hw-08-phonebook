import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operation";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            Notify.success(`Welcome ${action.payload.user.name}`);
        },
        [register.rejected](state, action) {
            state.isLoggedIn = false;
            Report.failure('Error', action.payload);
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            Notify.success(`Welcome ${action.payload.user.name}`);
        },
        [logIn.rejected](state) {
            state.isLoggedIn = false;
            Report.failure('Error', 'Invalid password or email');
        },
        [logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            Notify.success(`You left account!`);
        },
        [logOut.rejected](state) {
            state.isLoggedIn = false;
        },
        [refreshUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        [refreshUser.rejected](state) {
            state.isLoggedIn = false;
        },
    },
});

export const authReducer = authSlice.reducer; 