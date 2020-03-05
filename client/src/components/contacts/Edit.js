import React from 'react';
import {connect} from 'react-redux';
import ContactForm from '../contacts/Form';

import {startGetSingleContact, startEditContact} from '../../actions/contacts';

class ContactEdit extends React.Component{
    
    componentDidMount(){
        const id = this.props.match.params.id
        this.props.dispatch(startGetSingleContact(id))
    }

    handleSubmit = (formData) => {
        const id = this.props.match.params.id
        this.props.dispatch(startEditContact(formData, id, this.props))
    }
    
    render(){
        return(
            <div>
                <h2 className="text-center">Edit Contact</h2>
                {Object.keys(this.props.singleContact).length !== 0 && <ContactForm contact={this.props.singleContact} handleSubmit={this.handleSubmit}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        singleContact: state.singleContact
    }
}

export default connect(mapStateToProps)(ContactEdit)