import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const contactSlice = createSlice({
    name: 'contacts',
    initialState: { 
            items: []
        },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number
                    }
                };
            }
        },
        deleteContact(state, action) {
            state.items = state.items.filter(
                contact => contact.id !== action.payload
            );
        }
    }
});

export const { addContact, deleteContact } = contactSlice.actions;
export const selectContacts = (state) => state.contacts.items;
export default contactSlice.reducer;