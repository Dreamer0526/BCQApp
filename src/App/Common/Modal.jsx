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

    this.applySuccessStatement = 'Your application will be sent to group members. To join the group, more than half of group members\' approval is required.'
    this.updateSuccessStatement = 'Information has been successfully updated.'
  }

  render() {
    return <div className='modal-bg'>
        <div className='modal-wrap'>
            <Row className='modal-close'>
            <Col lgOffset={10}>
                {/* <a href='/#/'> */}
                    <span onClick={this.props.modalClose} className="fa fa-times-circle-o fa-2x"/>
                {/* </a> */}
            </Col>
            </Row>
            <Row className='modal-icon half-margin-top'>
                <span className="fa fa-check-square-o fa-10x"/>
            </Row>
            <Row className='modal-title base-margin-bottom'>
                <h3 className='none-margin'>SUCCESS</h3>
                <p> {this.props.caller === 'application'? this.applySuccessStatement : this.updateSuccessStatement} </p>
            </Row>
        </div>
    </div>
  }
}

export default Modal;