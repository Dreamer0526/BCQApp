import React, { Component } from 'react';
import {
  Row, Col, FormControl, Table, Button
} from 'react-bootstrap';
import './Approval.css';

class Approval extends Component {
  constructor(props) {
    super(props);
    this.tableHeader = ['Name', 'URL', 'Cer', 'Op'];
    this.tableBody = [
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
        <Row> 
          <Table>
            <thead>
              <tr>
                { this.tableHeader.map( th => {
                  return <th> {th} </th>;
                  }
                )}
              </tr>
            </thead>
            <tbody>
              { this.tableBody.map( obj => {
                  return <tr>
                    <td> {obj[0]} </td>
                    <td> {obj[1]} </td>
                    <td><Button> View Certificate </Button></td>
                    <td> {obj[2]} </td>
                  </tr>
                }
              )}
            </tbody>
          </Table>
        </Row>
      </Col>
    </Row>);
  }
}

export default Approval;