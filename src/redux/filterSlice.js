import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter(state, action) {
            return state = action.payload; // без return не працює
        }
    }
})

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
















// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact, filterContacts } from './actions';

// Альтернатива:

// const contactsInitialState = [];
// const filterInitialState = "";

// export const contactsReducer = (state = contactsInitialState, action) => {
//     switch (action.type) {
//         case addContact.type:
//             return [...state, action.payload];
        
//         case deleteContact.type:
//             return state.filter(contact => contact.id !== action.payload);
        
//         default:
//             return state;
//     }
// };

// export const filterReducer = (state = filterInitialState, action) => {
//     if(action.type === filterContacts.type) {
//         console.log(action.type);
//     }
// };


// Альтернатива:

// export const contactsReducer = createReducer(contactsInitialState, {
//     [addContact]: (state, { payload }) => {
//         return {...state, payload}
//     },
//     [deleteContact]: (state, { payload }) => {
//         return state.filter(contact => contact.id !== payload);
//     }
// });


// export const filterReducer = createReducer(filterInitialState, {
//     [filterContacts]: (state, { payload }) => {
//         return state.map(contact => {
//             if(contact.id !== payload) {
//                 return contact;
//             }            
//             return {
//                 ...contact,
//             }
//         });
//     }
// });