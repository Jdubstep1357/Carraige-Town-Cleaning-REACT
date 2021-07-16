import { CAMPSITES } from '../shared/Campsites'; 
import { COMMENTS } from '../shared/Comments';
import { CLEANERS } from '../shared/cleaners';
import { MAIN } from '../shared/main';

//Creates initial state that comes directly from Campsites
//export allows you to acess const from other files
export const initalState = {
    campsites: CAMPSITES,
    comments: COMMENTS,
    main: MAIN,
    cleaners: CLEANERS
};

//Reducer is a pure function
export const Reducer = (state = initalState, action) => {
    return state;
};