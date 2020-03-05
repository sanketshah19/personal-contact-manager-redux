import React from 'react';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';
import {Button, Card, CardColumns, Form} from 'react-bootstrap';

import {connect} from 'react-redux';

import {startGetAllContacts} from '../../actions/contacts';

class ContactList extends React.Component{

    componentDidMount(){
        this.props.dispatch(startGetAllContacts())
    }

    handleRemove(id){
        // swal({
        //     title: "Are you sure?",
        //     text: "Once deleted, you will not be able to recover this contact!",
        //     icon: "warning",
        //     buttons: true,
        //     dangerMode: true,
        //   })
        //   .then((willDelete) => {
        //     if (willDelete) {
        //         axios.delete(`/contacts/${id}`, {
        //             headers: {
        //                 'x-auth': localStorage.getItem('authToken')
        //             }
        //         })
        //         .then((response) => {
        //             if(response.data.hasOwnProperty('errors')){
        //                 swal("Oops!", `${response.data.message}`, "error");
        //             }else{
        //                 swal("Poof! Your contact has been deleted!", {
        //                     icon: "success",
        //                   })
        //                 const contacts = this.state.contacts.filter(contact => contact._id !== id )
        //                 this.setState({contacts})
        //             }
        //         })
        //         .catch((err) => {
        //             swal ("Oops", `${err}` ,"error")
        //         })
        //     }
        //   });
    }

    handleSearch = (e) => {
        // const value = e.target.value
        // if(value === ''){
        //     const contacts = this.state.dupContacts
        //     this.setState({contacts})
        // }else{
        //     const contacts = this.state.dupContacts.filter((contact) => {
        //         return (contact.name.toLowerCase().slice(0, value.length) === value.toLowerCase() || contact.mobile.toString().slice(0, value.length) === value)
        //     })
        //     this.setState({contacts})
        // }
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-md-4"><h2>Listing Contacts - {this.props.contacts.length}</h2></div>
                    <div className="col-md-2"><Link to="/contacts/new"><Button variant="outline-primary">Add Contact</Button></Link> </div>
                    <div className="col-md"><Form.Control onChange={this.handleSearch} className="form-control" type="search" placeholder="Search by name or mobile number"/></div>
                </div><hr/>
                
                <CardColumns className="row">
                {
                    this.props.contacts.map((contact) => {
                        return (
                            <div className="col-md-4 mr-0"  key={contact._id}>
                                <Card border="primary" bg="light" text="black" style={{width: "15rem", borderRadius: "15px" }}>
                                    <Card.Body>
                                        <Card.Title>Name: {contact.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{contact.category}</Card.Subtitle>
                                        <Card.Text>
                                        <strong>Email</strong>: {contact.email}<br/>
                                        <strong>Mobile</strong>: {contact.mobile}
                                        </Card.Text>
                                        <Card.Link href={`/contacts/${contact._id}`}>Show</Card.Link>
                                        <Card.Link href={`/contacts/edit/${contact._id}`}>Edit</Card.Link>
                                        <Card.Link href="#" onClick={() => this.handleRemove(contact._id)}>Remove</Card.Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }
                </CardColumns>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps)(ContactList)