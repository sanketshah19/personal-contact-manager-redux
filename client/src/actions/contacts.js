import axios from '../config/axios';
import swal from 'sweetalert';

export const getAllContacts = (contacts) => {
    return {
        type: 'GET_ALL_CONTACTS',
        payload: contacts
    }
}

export const addContact = (contact) => {
    return {
        type: 'ADD_CONTACT',
        payload: contact
    }
}

export const getSingleContact = (contact) => {
    return {
        type: 'SINGLE_CONTACT',
        payload: contact
    }
}

export const editContact = (contact) => {
    return {
        type: 'EDIT_CONTACT',
        payload: contact
    }
}

export const startGetAllContacts = () => {
    return (dispatch) => {
        axios.get('/contacts', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const contacts = response.data
            dispatch(getAllContacts(contacts))
        })
        .catch((err) => {
            swal ("Oops", `${err}` ,"error")
        })
    }
}

export const startAddContact = (formData, props) => {
    return (dispatch) => {
        axios.post('/contacts', formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('errmsg')){
                if(response.data.name === "MongoError" && response.data.code === 11000){
                    swal ("Oops", `${Object.keys(response.data.keyValue)} already exists` ,"error")
                }
            }else if(response.data.hasOwnProperty('errors')){
                swal("Oops!", `${response.data.message}`, "error")
            }else{
                swal("Success!", "Contact Created Successfully!", "success")
                props.history.push('/contacts')
                dispatch(addContact(response.data))
            }
        })
        .catch((err) => {
            swal("Oops!", `${err}`, "error");
        })
    }
}

export const startGetSingleContact = (id) => {
    return (dispatch) => {
        axios.get(`/contacts/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            const contact = response.data
            dispatch(getSingleContact(contact))
        })
        .catch((err) => {
            swal ("Oops", `${err}` ,"error")
        })
    }
}

export const startEditContact = (formData, id, props) => {
    return (dispatch) => {
        axios.put(`/contacts/${id}`, formData, {
                    headers: {
                        'x-auth': localStorage.getItem('authToken')
                    }
                })
                .then((response) => {
                    if(response.data.hasOwnProperty('errmsg')){
                        if(response.data.name === "MongoError" && response.data.code === 11000){
                            swal ("Oops", `${Object.keys(response.data.keyValue)} already exists` ,"error")
                        }
                    }else if(response.data.hasOwnProperty('errors')){
                        swal("Oops!", `${response.data.message}`, "error")
                    }else{
                        swal("Success!", "Details Updated Successfully!", "success")
                        dispatch(editContact(response.data))
                        props.history.push('/contacts')
                    }
                })
                .catch((err) => {
                    swal ("Oops", `${err}` ,"error")
                })
    }
}