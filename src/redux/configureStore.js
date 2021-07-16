import { createStore } from 'redux';
import { Reducer } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer
    );

    //in App.js ConfigureStore() is where this goes
    return store;
}