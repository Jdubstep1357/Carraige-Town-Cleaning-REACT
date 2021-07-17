    
    //THIS IS USED FOR ONCLICK ON PHOTO FROM NUCAMP SITE


    // The * acts as a wildcard that allows one to import all named exports at once
import * as ActionTypes from './ActionTypes';

export const addCleaner = (cleanerId, fullname, phone, email) => ({
    //Accesses ADD_COMMENT from ActionTypes.js
    type: ActionTypes.ADD_CLEANER,
    //pass in all attributes
    payload: {
        cleanerId: cleanerId,
        fullname: fullname,
        phone: phone,
        email: email
    }
});