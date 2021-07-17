    
    //THIS IS USED FOR ONCLICK ON PHOTO FROM NUCAMP SITE


    // The * acts as a wildcard that allows one to import all named exports at once
import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';





export const addCleaner = cleaner => ({
    type: ActionTypes.ADD_CLEANER,
    payload: cleaner

});

export const postCleaner = (cleanerId, fullname, phone, email) => dispatch => {

    //pass in all attributes
    const newCleaner = {
        cleanerId: cleanerId,
        fullname: fullname,
        phone: phone,
        email: email
    };
    newCleaner.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
            method: "POST",
            body: JSON.stringify(newCleaner),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if(response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(response => dispatch(addCleaner(response)))
    .catch(error => {
        console.log('post comment', error.message);
        alert('Your comment could not be posted/nError: ' + error.message);
    });
};
