import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button, Card, Col, Row} from 'react-bootstrap';

import {startGetSingleContact} from '../../actions/contacts';

class ContactShow extends React.Component{

    componentDidMount(){
        const id = this.props.match.params.id
        this.props.dispatch(startGetSingleContact(id))
    }
    
    render(){
        return(
            <div>
                <br/>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        <Card className="text-center">
                            <Card.Header><strong>Contact Information</strong></Card.Header>
                            <Card.Body>
                                <Card.Title>Name: {this.props.singleContact.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{this.props.singleContact.category}</Card.Subtitle>
                                <Card.Text>
                                <strong>Email: </strong>{this.props.singleContact.email}<br/>
                                <strong>Mobile: </strong>{this.props.singleContact.mobile}<br/>
                                </Card.Text>
                                <Link to="/contacts"><Button variant="primary">Back</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        singleContact: state.singleContact
    }
}

export default connect(mapStateToProps)(ContactShow)