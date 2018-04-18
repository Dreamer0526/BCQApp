import React, { Component } from 'react';
import {
  Row, Col, FormControl, Table
} from 'react-bootstrap';
import './Approval.css';

class Approval extends Component {
  constructor(props) {
    super(props);
    this.tableHeader = ['Name', 'URL', 'Cer', 'Op']
    this.state = {}
  }

  render() {
    return <Row className='base-padding-top'>
      <Table>

      </Table>
    </Row>;
  }
}

export default Approval;