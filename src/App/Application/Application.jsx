import React, { Component } from 'react';
import {
  Row, Col, Form, FormControl, FormGroup
} from 'react-bootstrap';
import './Application.css';

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitLoading: true,
      submitDisabled: true,
    }
  }

  render() {
    return (<Row className='base-padding-top'>
      <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
        <Row>
          <h2> APPLICATION </h2>
        </Row>
        <Row className='base-margin-top dbl-padding-bottom'>
          <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2} lg={8} lgOffset={2}>
            <Form className='base-padding-left base-padding-right'>
              <FormControl  id='name'
                            className='input-field application-input base-padding-top base-padding-bottom'
                            type='text'
                            placeholder='NAME'/>
              <FormControl  id='url'
                            className='input-field application-input base-padding-top base-padding-bottom'
                            type='text'
                            placeholder='URL'/>
              <FormControl  id='certificate'
                            className='input-field application-textarea base-padding-top base-padding-bottom'
                            componentClass="textarea"
                            placeholder='CERTIFICATE'/>
              <FormGroup className='input-with-loader none-margin'>
                <FormControl  id='submit'
                              className='input-field application-submit half-padding-top base-padding-bottom'
                              type='submit'
                              value='GO!'
                              disabled={this.state.submitDisabled}/>
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

export default Application;