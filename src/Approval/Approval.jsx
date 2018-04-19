import React, { Component } from 'react';
import {
  Row, Col, FormControl, Table, Button
} from 'react-bootstrap';
import './Approval.css';

class Approval extends Component {
  constructor(props) {
    super(props);
    this.header = ['Name', 'URL', 'Cer', 'Op'];
    this.data = [
      ['name1', 'http://1.blablabla.com', 'certificate1'],
      ['name2', 'http://2.blablabla.com', 'certificate2'],
      ['name3', 'http://3.blablabla.com', 'certificate3'],
      ['name4', 'https://codepen.io/cssparadise/pen/NgaOqm?editors=1100', 'certificate4'], 
    ];
    this.state = {}
  }

  render() {
    return (<Row className='base-padding-top'>
      <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
        <Row>
          <h2> View Application </h2>
        </Row>
        <Row className=' base-margin-top dbl-margin-bottom'>
          <div className='table-wrapper'>
              <div className="table-row table-title">
                <ul>
                {
                  this.header.map( h => {
                    return <li> {h} </li>
                  })
                }
                </ul>
              
                {/* <ul>
                  <li>Sport</li>
                  <li>Entry</li>
                  <li>Entries</li>
                  <li>Max</li>
                  <li>Time</li>
                </ul>  */}
              </div>
              
              
              <div className="table-row nfl">
              {
                  this.data.map( e => {
                    return <span>
                      <ul>
                        <li> {e[0]} </li>
                        <li> {e[1]} </li>
                        <li> View Certificate </li>
                        <li> options </li>
                      </ul>
                      <ul class="more-content">
                        <li>{e[2]}</li>
                      </ul>
                    </span>
                  })
                }
              </div>
              
              {/* <div className="table-row nfl">
                <ul>
                  <li><a href="#">NHL</a></li>
                  <li>$50</li>
                  <li>12</li>
                  <li>48</li>
                  <li>12:00ET</li>
                </ul>
                <ul class="more-content">
                  <li>This 1665-player contest boasts a $300,000.00 prize pool and pays out the top 300 finishing positions. First place wins $100,000.00. Good luck!</li>
                </ul>
              </div> */}
              
          </div>
        </Row>
      </Col>
    </Row>);
  }
}

export default Approval;