import React, { Component } from 'react';
import {
  Row, Col, Form, FormControl, FormGroup
} from 'react-bootstrap';
import './Update.css';
import Modal from '../Common/Modal'

class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitLoading: false,
      submitDisabled: false,
      showModal: false
    }
  }

  handleOnClick() {
    this.setState({
      submitDisabled: true,
      submitLoading: true
    })
    setTimeout(() => {
      this.setState({
        submitDisabled: false,
        submitLoading: false,
        showModal: true
      })
    }, 2500)
  }

  onModalClose() {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (<Row className='container-relative'>
      { this.state.showModal && <Modal caller='update' modalClose={this.onModalClose.bind(this)}/>}    
      <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
        <Row className='dbl-margin-top'>
          <h2> INFORMATION UPDATE </h2>
        </Row>
        <Row className='dbl-padding-bottom'>
          <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2} lg={8} lgOffset={2}>
            <Form className='base-padding-left base-padding-right'>
              <FormControl  id='name'
                            className='input-field base-padding-top base-padding-bottom bg-color-transparent field-disabled'
                            type='text'
                            value={this.props.user.name}/>
                <FormControl  id='url'
                              className='input-field base-padding-top base-padding-bottom'
                              type='text'
                              value={this.props.user.homeUrl}/>
                <FormControl  id='certificate'
                              className='input-field input-textarea base-padding-top base-padding-bottom'
                              componentClass='textarea'
                              value={this.props.user.caCert}/>
              <FormGroup className='container-relative none-margin'>
                <FormControl  id='submit'
                              className={`input-field input-submit half-padding-top base-padding-bottom ${this.state.submitDisabled && 'field-disabled'}`}
                              type='submit'
                              value='UPDATE'
                              onClick={this.handleOnClick.bind(this)}/>
                  <img  className={`icon-loader ${!this.state.submitLoading && 'hidden'}`}
                      src={require('../../Common/svg-loaders/bars.svg')} />  
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Col> 
    </Row>);
  }
}

export default Update;