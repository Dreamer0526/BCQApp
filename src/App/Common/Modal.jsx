import React, { Component } from 'react';
import {
  Row, Col
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
        showModal: this.props.display
    }

    let successStatement = ''
    switch(this.props.caller) {
        case 'application':
            this.successStatement = 'Your application will be sent to group members. To join the group, more than half of group members\' approval is required.'
            break
        case 'approval':
            this.successStatement = 'User has already been added into group.'
            break;
        case 'update':
            this.successStatement = 'Information has been successfully updated.'
            break       
    }
  }

  render() {
    return <div className='modal-bg'>
        <div className='modal-wrap'>
            <Row className='modal-close'>
            <Col lgOffset={10}>
                <span onClick={this.props.modalClose} className="fa fa-times-circle-o fa-2x"/>
            </Col>
            </Row>
            <Row className='modal-icon half-margin-top'>
                <span className="fa fa-check-square-o fa-10x"/>
            </Row>
            <Row className='modal-title base-margin-bottom'>
                <h3 className='none-margin'>SUCCESS</h3>
                <p> {this.successStatement} </p>
            </Row>
        </div>
    </div>
  }
}

export default Modal;