
//THIS IS USED FOR ONCLICK ON PHOTO FROM NUCAMP SITE


// The * acts as a wildcard that allows one to import all named exports at once
import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';





export const addCleaner = cleaner => ({
    type: ActionTypes.ADD_CLEANER,
    payload: cleaner

});

//You can add the authorization id in the headers below in postCleaner eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU1YTAxOGY0NTM3YTRiMmNmMWUxOTMiLCJpYXQiOjE2MzM0NzMyMzUsImV4cCI6MTYzMzQ3NjgzNX0.pfHVPFaY75TwVUTF-PQ7gT7sz4cFjwcb0G8FiXO9XJQeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU1YTAxOGY0NTM3YTRiMmNmMWUxOTMiLCJpYXQiOjE2MzM0NzMyMzUsImV4cCI6MTYzMzQ3NjgzNX0.pfHVPFaY75TwVUTF-PQ7gT7sz4cFjwcb0G8FiXO9XJQeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU1YTAxOGY0NTM3YTRiMmNmMWUxOTMiLCJpYXQiOjE2MzM0NzMyMzUsImV4cCI6MTYzMzQ3NjgzNX0.pfHVPFaY75TwVUTF-PQ7gT7sz4cFjwcb0G8FiXO9XJQ
export const postCleaner = (cleanerId, fullname, phone, email, location) => dispatch => {
    // //pass in all attributes
    const newCleaner = {
        cleanerId: cleanerId,
        fullname: fullname,
        phone: phone,
        email: email,
        location: location
    };
    newCleaner.date = new Date().toISOString();
    console.log('baseUrl', baseUrl);
    console.log('Cleaner ', newCleaner);

    const bearer = "Bearer " + localStorage.getItem('token');

    return fetch('http://localhost:3000/readytowork', {
        method: "POST",
        body: JSON.stringify(newCleaner),
        headers: {
            "Content-Type": "application/json",
            'Authorization': bearer
        },
        //credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
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
        .then(r => console.log(r))
        //.then(response => dispatch(addCleaner(response)))
        .catch(error => {
            console.log('post comment', error.message);
            alert('Your comment could not be posted/nError: ' + error.message);
        });
};
