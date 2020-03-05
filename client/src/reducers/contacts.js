const contactsInitialState = []

const contactsReducer = (state = contactsInitialState, action) => {
    switch(action.type){
        case 'GET_ALL_CONTACTS': {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}

export default contactsReducer