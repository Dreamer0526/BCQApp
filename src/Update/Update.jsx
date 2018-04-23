import React, { Component } from 'react';
import {
  Row, Col, Form, FormControl
} from 'react-bootstrap';
import './Update.css';

class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
      console.log(0);
      console.log(this.props.location);
      console.log(0);
    return (<Row className='base-padding-top'>
      <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
        <Row>
          <h2> INFORMATION <br/> UPDATE </h2>
        </Row>
        <Row className='base-margin-top dbl-padding-bottom'>
          <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2} lg={8} lgOffset={2}>
            <Form className='base-padding-left base-padding-right'>
              <FormControl  id='name'
                            className='input-field update-input base-padding-top base-padding-bottom bg-color-transparent'
                            type='text'
                            value='h'
                            disabled={true}/>
              <FormControl  id='url'
                            className='input-field update-input base-padding-top base-padding-bottom'
                            type='text'
                            placeholder='URL'/>
              <FormControl  id='certificate'
                            className='input-field update-textarea base-padding-top base-padding-bottom'
                            componentClass="textarea"
                            placeholder='CERTIFICATE'/>
              <FormControl  id='submit'
                            className='input-field update-submit half-padding-top base-padding-bottom'
                            type='submit'
                            value='GO!'/>
            </Form>
          </Col>
        </Row>
      </Col> 
    </Row>);
  }
}

export default Update;