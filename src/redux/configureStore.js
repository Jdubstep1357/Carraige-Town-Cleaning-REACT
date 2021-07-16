import { createStore } from 'redux';
import { Reducer, initalState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    //in App.js ConfigureStore() is where this goes
    return store;
}