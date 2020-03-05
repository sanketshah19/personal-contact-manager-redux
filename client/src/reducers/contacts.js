const contactsInitialState = []

const contactsReducer = (state = contactsInitialState, action) => {
    switch(action.type){
        case 'GET_ALL_CONTACTS': {
            return [...action.payload]
        }
        case 'ADD_CONTACT': {
            return [...state, action.payload]
        }
        case 'EDIT_CONTACT': {
            return [...state, action.payload]
        }
        case 'REMOVE_CONTACT': {
            return [...state].filter(contact => contact._id !== action.payload)
        }
        case 'SEARCH_CONTACT': {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}

export default contactsReducer