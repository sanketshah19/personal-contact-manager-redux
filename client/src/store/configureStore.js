import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import userReducer from '../reducers/user';
import contactsReducer from '../reducers/contacts';
import singleContactReducer from '../reducers/singleContact';

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        contacts: contactsReducer,
        singleContact: singleContactReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore