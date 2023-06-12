import { configureStore } from "@reduxjs/toolkit";

import { itemsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filter/filterSlice";
import { authReducer } from "./auth/slice";
    
export const store = configureStore({
    reducer: {
        contacts: itemsReducer,
        filter: filterReducer,
        auth: authReducer
    },
});