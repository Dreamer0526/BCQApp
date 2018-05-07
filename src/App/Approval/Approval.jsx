import React, { Component } from 'react'
import {
  Row, Col
} from 'react-bootstrap'
import './Approval.css'
import TableRow from './TableRow'
import {allData} from '../../Common/static/allData'
import {approvedData} from '../../Common/static/approvedData'
import {pendingData} from '../../Common/static/pendingData'

class Approval extends Component {
  constructor(props) {
    super(props)
    
    this.threeColWidthDistribution = [30, 40, 30]
    this.fourColWidthDistribution = [20, 40, 20, 20]

    this.dataTitle=[ 'NAME', 'HOMEURL', 'CERTIFICATE', 'OPRATION' ]

    this.allData = []
    this.approvedData = []
    this.pendingData = []

    this.state = {
      checkedTab: 'pending',
      displayedData: this.pendingData,
      widthDistribution: this.fourColWidthDistribution
    }
  }

  componentWillMount() {
    fetch('/companies?pending=1')
    .then(result => result.json())
    .then(result => {
      this.pendingData = result
      this.setState({displayedData: result})
    }).catch(error => {
      this.pendingData = pendingData
    })

    fetch('/companies?approved=1')
    .then(result => result.json())
    .then(result => {
      this.approvedData = result
    }).catch(error => {
      this.approvedData = approvedData
    })
    
    fetch('/companies')
    .then(result => result.json())
    .then(result => {
      this.allData = result
    }).catch(error => {
      this.allData = allData
    })
  }

  onClick(section) {
    let displayedData
    switch (section) {
      case 'all':
        displayedData = this.allData
        break
      case 'approved':
        displayedData = this.approvedData
        break
      case 'pending':
        displayedData = this.pendingData
        break
      default:
        break
    }
    this.setState({
      checkedTab: section,
      displayedData,
      widthDistribution: section === 'pending'? this.fourColWidthDistribution: this.threeColWidthDistribution
    })
  }

  handleOpration = (entry, approved) => {
    if (this.props.status === "PENDING") return

    let approvedEntry = {}
    for (let index = 0; index < this.pendingData.length; index++) {
      if( this.pendingData[index].name === entry.name) {
        approvedEntry = this.pendingData[index]
        this.pendingData.splice(index, 1)
        break
      }
    }
    this.setState({
      displayedData: this.pendingData
    })
    if (approved) {
      this.approvedData.push(approvedEntry)
    }
  }

  render() {
    return (<Row className='dbl-padding-top dbl-margin-bottom'>
      <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
        <Row>
          <h2> VIEW APPLICATION </h2>
          <h4 className='pull-right'> 
            STATUS: 
            {this.props.status === 'PENDING'? <span className="fa fa-circle fa-1x color-orange"/> : <span className="fa fa-check-square fa-1x color-green"/>} 
            {this.props.status} 
          </h4>
        </Row>
        {/* LABELS */}
        <Row className=''>
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
        <Row className='tab-panel dbl-margin-bottom'>
          <TableRow data={this.dataTitle} 
                    isTableTitle={true}
                    widthDistribution={this.state.widthDistribution}
                    isPendingTab={this.state.checkedTab === 'pending'}/>
          { this.state.displayedData.map( (entry, index) => {
              return <TableRow  key={`tablerow_${this.state.checkedTab}_${index}`}
                                onApprove={this.handleOpration.bind(this, entry, true)}
                                onDeny={this.handleOpration.bind(this, entry, false)}
                                data={entry}
                                isPending={this.props.status === 'PENDING'}
                                isTableTitle={false}
                                widthDistribution={this.state.widthDistribution}                    
                                isPendingTab={this.state.checkedTab === 'pending'}/>
            })
          }
        </Row>
      </Col>
    </Row>)
  }
}

export default Approval