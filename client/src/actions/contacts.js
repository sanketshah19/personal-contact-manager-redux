import axios from '../config/axios';
import swal from 'sweetalert';

export const getAllContacts = (contacts) => {
    return {
        type: 'GET_ALL_CONTACTS',
        payload: contacts
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