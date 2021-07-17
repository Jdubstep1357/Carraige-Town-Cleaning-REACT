import { CLEANERS } from '../shared/cleaners';
import * as ActionTypes from './ActionTypes';

//Causer reducer to update part of state when add_comment dispatched to store

//reducer function to handle each part of state
export const Cleaners = (state = CLEANERS, action) => {
    switch(action.type) {
        case ActionTypes.ADD_CLEANER:
            //action.payload is object. You can add more to it, ie: id and date
            const cleaner = action.payload;
            //concat method attaches new item to end of array without mutating array
            return state.concat(cleaner)
        default:
            return state;
    }
};