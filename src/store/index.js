// const redux = require('redux');
import {createSlice, configureStore} from "@reduxjs/toolkit";
import counterReducer from './counter';
import authReducer from './auth';


// const initialCounterState = {counter:0, showCounter: true};

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState : initialCounterState,
//     reducers: {
//         increment(state) {
//             state.counter++;
//         },
//         decrement(state) {
//             state.counter--;
//         },
//         increase(state, action) {
//             state.counter = state.counter + action.payload;
//         },
//         toggleCounter(state) {
//             state.showCounter = !state.showCounter;
//         }
//     }
// })

// const initialAuthState = {
//     isLoggedIn : false
// }

// const authSlice = createSlice({
//     name: 'auth',
//     initialState: initialAuthState,
//     reducers : {
//         login(state) {
//             state.isLoggedIn = true
//         },
//         logout(state) {
//             state.isLoggedIn = false
//         }
//     }
// })

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer}
})

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;