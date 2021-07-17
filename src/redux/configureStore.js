import { createStore, combineReducers } from 'redux';
import { Campsites } from './campsites'
import { Main } from './main';
import { Cleaners } from './cleaners';

export const ConfigureStore = () => {
    const store = createStore(
        //This combines all of the data in redux ie: cleaners.js, main.js, and campsites.js
        combineReducers({
            campsitse: Campsites,
            main: Main,
            cleaners: Cleaners
        })
    );

    //in App.js ConfigureStore() is where this goes
    return store;
}