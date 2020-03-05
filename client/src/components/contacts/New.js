import React from 'react';
import {connect} from 'react-redux';
import ContactForm from '../contacts/Form';

import {startAddContact} from '../../actions/contacts';

class ContactNew extends React.Component{
    
    handleSubmit = (formData) => {
        this.props.dispatch(startAddContact(formData, this.props))
    }
    
    render(){
        return(
            <div>
                <h2 className="text-center">Create Contact</h2>
                <ContactForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}



export default connect()(ContactNew)