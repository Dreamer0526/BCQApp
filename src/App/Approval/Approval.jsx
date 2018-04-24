import React, { Component } from 'react';
import {
  Row, Col
} from 'react-bootstrap';
import './Approval.css';
import TableRow from './TableRow';

class Approval extends Component {
  constructor(props) {
    super(props);

    this.dataTitle=[ 'NAME', 'URL', 'CERTIFICATE', 'OPRATION' ];
    this.allData = [
      { 'name':'name1', 'url': 'http://jonjaques.github.io/react-loaders/', 'certificate': 'certificate1'},
      { 'name':'name2', 'url': 'https://github.com/jonjaques/react-loaders', 'certificate': 'certificate2'},
      { 'name':'name3', 'url': 'http://3.blablabla.com', 'certificate': 'certificate3'},
      { 'name':'name4', 'url': 'http://4.blablablablablablablablablablablablablablablablablablablablablablablabla.com', 'certificate': 'certificate4'}
    ];
    this.approvedData = [
      { 'name':'name1', 'url': 'http://jonjaques.github.io/react-loaders/', 'certificate': 'certificate1'},
      { 'name':'name2', 'url': 'https://github.com/jonjaques/react-loaders', 'certificate': 'certificate2'},
      { 'name':'name3', 'url': 'http://3.blablabla.com', 'certificate': 'certificate3'}
    ];
    this.pendingData = [
      { 'name':'name4', 'url': 'http://4.blablablablablablablablablablablablablablablablablablablablablablablabla.com', 'certificate': 'certificate4'}
    ];

    this.widthDistribution = [20, 40, 20, 20];

    this.state = {
      checkedTab: 'pending',
      displayedData: this.pendingData,
    }
  }

  onClick(section) {
    let displayedData;
    switch (section) {
      case 'all':
        displayedData = this.allData;
        break;
      case 'approved':
        displayedData = this.approvedData;
        break;
      case 'pending':
        displayedData = this.pendingData;
        break;
      default:
        break;
    }
    this.setState({
      checkedTab: section,
      displayedData
    });
  }

  render() {
    return (<Row className='base-padding-top'>
      <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
        <Row>
          <h2> VIEW APPLICATION </h2>
        </Row>
        {/* LABELS */}
        <Row className='base-margin-top'>
          <Col xs={12} sm={3} md={3} lg={2} className={`tab-label ${this.state.checkedTab==='pending' && 'tab-checked'}`}>
            <div  id='pending'
                  className=''
                  onClick={this.onClick.bind(this, 'pending')}>
              PENDING
            </div>
          </Col>
          <Col xs={12} sm={3} md={3} lg={2} className={`tab-label ${this.state.checkedTab==='approved' && 'tab-checked'}`}>
            <div  id='approved'
                  className=''
                  onClick={this.onClick.bind(this, 'approved')}>
              APPROVED
            </div>
          </Col>
          <Col xs={12} sm={3} md={3} lg={2} className={`tab-label ${this.state.checkedTab==='all' && 'tab-checked'}`}>
            <div  id='all'
                  className=''
                  onClick={this.onClick.bind(this, 'all')}>
              ALL
            </div>
          </Col>
        </Row>
        {/* PANEL */}
        <Row className='tab-panel'>
          <TableRow data={this.dataTitle} 
                    isTableTitle={true}
                    widthDistribution={this.widthDistribution}
          />
          { this.state.displayedData.map( entry => {
              return <TableRow  data={entry}
                                isTableTitle={false}
                                widthDistribution={this.widthDistribution}/>
            })
          }
        </Row>
      </Col>
    </Row>);
  }
}

export default Approval;