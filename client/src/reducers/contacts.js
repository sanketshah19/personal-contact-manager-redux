const contactsInitialState = []

const contactsReducer = (state = contactsInitialState, action) => {
    switch(action.type){
        default: {
            return [...state]
        }
    }
}

export default contactsReducer