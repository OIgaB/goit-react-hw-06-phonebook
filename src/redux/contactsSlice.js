import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [
        {id: 'id-1', name: 'Mykhailo Kotsiubynsky', number: '459-12-56'},
        {id: 'id-2', name: 'Hryhorii Skovoroda', number: '443-89-12'},
        {id: 'id-3', name: 'Pavlo Tychyna ', number: '645-17-79'},
        {id: 'id-4', name: 'Saint Nicholas', number: '227-91-26'},
    ],
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    }
                };
            },
        },
        // deleteContact(state, action){
        //     const index = state.findIndex(contact => contact.id === action.payload);
        //     state.splice(index, 1);
        // }
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;