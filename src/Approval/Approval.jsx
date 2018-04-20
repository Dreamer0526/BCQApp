import React, { Component } from 'react';
import {
  Row, Col
} from 'react-bootstrap';
import './Approval.css';

class Approval extends Component {
  constructor(props) {
    super(props);
    this.header = ['NAME', 'URL', 'CERTIFICATE', 'OP'];
    this.data = [
      ['name1', 'http://1.blablabla.com', 'certificate1'],
      ['name2', 'http://2.blablabla.com', 'certificate2'],
      ['name3', 'http://3.blablabla.com', 'certificate3'],
      ['name4', 'http://4.blablabla.com', 'certificate4'], 
    ];
    this.state = {}
  }

  render() {
    return (<Row className='base-padding-top'>
      <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
        <Row>
          <h2> View Application </h2>
        </Row>
        <Row className='base-margin-top dbl-margin-bottom'>
          <div className='table-wrapper'>
              <div className='table-row table-title'>
                <ul>
                { this.header.map( h => {
                    return <li> {h} </li>
                  })
                }
                </ul>
              </div>
              { this.data.map( e => {
                  return <div className='table-row'>
                    <ul className='mlb'>
                      <li><span> {e[0]} </span></li>
                      <li> {e[1]} </li>
                      <li><a> View </a></li>
                      <li> options </li>
                    </ul>
                    <ul className='more-content'>            
                      <li>{e[2]}</li>
                    </ul>
                  </div>
                })
              }
          </div>
        </Row>
      </Col>
    </Row>);
  }
}

export default Approval;