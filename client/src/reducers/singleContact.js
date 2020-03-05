const contactInitialState = {}

const singleContactReducer = ( state = contactInitialState, action)=>{
    switch (action.type){
        case 'SINGLE_CONTACT':{
            return {...action.payload}
        }
        default: {
            return {...state}
        }
    }
}

export default singleContactReducer