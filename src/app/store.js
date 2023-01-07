import { configureStore } from "@reduxjs/toolkit";
import rickandmortyReducer from "../feature/rick&morty/rickandmortySlice";


const store = configureStore({
    reducer: {
        reducer: {
            rickandmorty: rickandmortyReducer,
        }
    }
});


export default store;