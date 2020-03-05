import React from 'react';
import swal from 'sweetalert';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';

import ContactImg from '../../Images/Contact.jpg';

class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: props.contact ? props.contact.name : '',
            email: props.contact ? props.contact.email : '',
            mobile: props.contact ? props.contact.mobile : '',
            category: props.contact ? props.contact.category : '',
            errors: {
                name: '',
                email: '',
                mobile: '',
                category: ''
            }
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let errors = this.state.errors;
        const validEmailRegex = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        const validMobileRegex = RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/)

        switch (name) {
            case 'name': 
            errors.name = 
              value.length < 1
                ? 'Name cannot be empty!'
                : '';
            break;
            case 'email': 
                errors.email = 
                validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid!';
                break;
            case 'mobile': 
                errors.mobile = 
                validMobileRegex.test(value)
                    ? ''
                    : 'Mobile number is not valid!';
                break;
            case 'category': 
                errors.category = 
                value === ''
                    ? 'Select category!'
                    : '';
                break;
            default:
                break;
        }
        this.setState({errors, [name]: value});
    }

    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
          (val) => val.length > 0 && (valid = false)
        );
        return valid;
      }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.validateForm(this.state.errors)){
            const formData = {
                name: this.state.name,
                email: this.state.email,
                mobile: this.state.mobile,
                category: this.state.category
            }
            this.props.handleSubmit(formData)
        }else{
            swal ("Oops","Please fill all the details correctly!","error")
        }
    }


    render(){
        const {errors} = this.state;
        return(
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <img style={{width: '100%', height: '450px'}} src={ContactImg} alt="Contact"/>
                </div>
                <div className="col-md-6 mx-auto">
                    <Form onSubmit={this.handleSubmit} style={{ border: "thin solid #007BFF", padding: "2rem", margin: "2rem", borderRadius:'15px'}}>

                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" value={this.state.name} onChange={this.handleChange} name="name" required/>
                                <Form.Text className="text-muted">
                                {errors.name.length > 0 && <span className='error' style={{ color: 'red' }}>{errors.name}</span>}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} name="email" required/>
                                <Form.Text className="text-muted">
                                {errors.email.length > 0 && <span className='error' style={{ color: 'red' }}>{errors.email}</span>}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="mobile">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control type="text" placeholder="Enter Mobile Number" value={this.state.mobile} onChange={this.handleChange} name="mobile" required/>
                                <Form.Text className="text-muted">
                                {errors.mobile.length > 0 && <span className='error' style={{ color: 'red' }}>{errors.mobile}</span>}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="category">
                                <Form.Label>Category</Form.Label>
                                <Form.Control as="select" value={this.state.category} onChange={this.handleChange} name="category" required>
                                <option value="">Select</option>
                                <option value="Home">Home</option>
                                <option value="Work">Work</option>
                                </Form.Control>
                                <Form.Text className="text-muted">
                                {errors.category.length > 0 && <span className='error' style={{ color: 'red' }}>{errors.category}</span>}
                                </Form.Text>
                            </Form.Group>

                            <Button variant="primary" type="submit" size="md" className="col-md-3 offset-md-3 mt-1 text-center">
                                Submit
                            </Button>
                            <Link to="/contacts"><Button variant="primary" size="md" className="col-md-3 ml-2 mt-1 text-center">Back</Button></Link>
                        </Form>
                </div>
            </div>
        )
    }

}

export default connect()(ContactForm)