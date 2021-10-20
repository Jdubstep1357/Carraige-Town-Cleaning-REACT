import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Campsites } from './campsites'
import { Main } from './main';
import { Cleaners } from './cleaners';

import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(
        //This combines all of the data in redux ie: cleaners.js, main.js, and campsites.js
        combineReducers({
            campsitse: Campsites,
            main: Main,
            cleaners: Cleaners
        }),
        applyMiddleware(thunk)
    );

    //in App.js ConfigureStore() is where this goes
    return store;
}