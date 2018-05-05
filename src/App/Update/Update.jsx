import React, { Component } from 'react';
import {
  Row, Col, Form, FormControl, FormGroup
} from 'react-bootstrap';
import './Update.css';

class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlLoading: false,
      cerLoading: false,
      submitDisabled: false,
    }
  }

  handleOnClick() {
    this.setState({
      urlLoading: true,
      cerLoading: true,
      submitDisabled: true
    })
  }

  render() {
    return (<Row className='base-padding-top'>
      <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
        <Row>
          <h2> INFORMATION UPDATE </h2>
        </Row>
        <Row className='base-margin-top dbl-padding-bottom'>
          <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2} lg={8} lgOffset={2}>
            <Form className='base-padding-left base-padding-right'>
              <FormControl  id='name'
                            className='input-field base-padding-top base-padding-bottom bg-color-transparent field-disabled'
                            type='text'
                            value={this.props.username}/>
              <FormGroup className='container-relative none-margin'>
                <FormControl  id='url'
                              className='input-field base-padding-top base-padding-bottom'
                              type='text'
                              placeholder='URL'/>
                <img  className={`icon-loader ${!this.state.urlLoading && 'hidden'}`}
                      src={require('../../Common/svg-loaders/bars.svg')} />
              </FormGroup>
              <FormGroup className='container-relative none-margin'>
                <FormControl  id='certificate'
                              className='input-field input-textarea base-padding-top base-padding-bottom'
                              componentClass='textarea'
                              placeholder='CERTIFICATE'/>
                <img  className={`icon-loader ${!this.state.cerLoading && 'hidden'}`}
                      src={require('../../Common/svg-loaders/bars.svg')} />
              </FormGroup>
              <FormControl  id='submit'
                            className={`input-field input-submit half-padding-top base-padding-bottom ${this.state.submitDisabled && 'field-disabled'}`}
                            type='submit'
                            value='UPDATE'
                            onClick={this.handleOnClick.bind(this)}/>
            </Form>
          </Col>
        </Row>
      </Col> 
    </Row>);
  }
}

export default Update;