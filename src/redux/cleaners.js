import { CLEANERS } from '../shared/cleaners';

//reducer function to handle each part of state
export const Cleaners = (state = CLEANERS, action) => {
    switch(action.type) {
        default:
            return state;
    }
};