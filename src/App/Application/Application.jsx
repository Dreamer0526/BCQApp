import React, { Component } from 'react'
import {
  Row, Col, Form, FormControl, FormGroup, Button
} from 'react-bootstrap'
import {withRouter} from "react-router-dom"
import './Application.css'
import Modal from '../Common/Modal'

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      url: '',
      cert: '',
      submitLoading: false,
      submitDisabled: false,
      showModal: false
    }
  }

  handleOnSubmit() {
    this.setState({
      submitDisabled: true,
      submitLoading: true
    })

    let data = {
      name: this.state.name,
      homeUrl: this.state.url,
      caCert: this.state.cert
    }
    
    fetch('/add', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => {
      this.setState({
        submitDisabled: false,
        submitLoading: false,
        showModal: true
      })
    }).catch(error => {
      setTimeout(() => {
        this.setState({
          submitDisabled: false,
          submitLoading: false,
          showModal: true
        })
      }, 2500)
    })
  }

  handleOnChange(field, value) {
    this.setState({
      [field]: value
    })
  }

  onModalClose = () => {
    this.setState({
      showModal: false
    })
    let {history} = this.props;
    history.push('/approval')
  }

  render() {
    return (<Row className='container-relative'>
      { this.state.showModal && <Modal caller='application' display={this.state.showModal} modalClose={this.onModalClose.bind(this)}/> }
      <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
        <Row className='dbl-margin-top'>
          <h2> APPLICATION </h2>
        </Row>
        <Row className='base-margin-top dbl-padding-bottom'>
          <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2} lg={8} lgOffset={2}>
            <Form className='base-padding-left base-padding-right'>
              <FormControl  id='name'
                            className='input-field base-padding-top base-padding-bottom'
                            type='text'
                            placeholder='NAME'
                            onChange={(event) => this.handleOnChange('name', event.target.value)}/>
              <FormControl  id='url'
                            className='input-field base-padding-top base-padding-bottom'
                            type='text'
                            placeholder='URL'
                            onChange={(event) => this.handleOnChange('url', event.target.value)}/>                            
              <FormControl  id='certificate'
                            className='input-field input-textarea base-padding-top base-padding-bottom'
                            componentClass="textarea"
                            placeholder='CERTIFICATE'
                            onChange={(event) => this.handleOnChange('cert', event.target.value)}/>
              <FormGroup className='container-relative none-margin'>
                <FormControl  id='submit'
                              className={`input-field input-submit half-padding-top base-padding-bottom ${this.state.submitDisabled && 'field-disabled'}`}
                              type='submit'
                              value='GO!'
                              onClick={this.handleOnSubmit.bind(this)}/>
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