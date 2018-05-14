import React, { Component } from 'react'
import {
  Row, Col
} from 'react-bootstrap'
import './Approval.css'
import TableRow from './TableRow'
import {allData} from '../../Common/static/allData'
import {approvedData} from '../../Common/static/approvedData'
import {pendingData} from '../../Common/static/pendingData'
import StatusBar from '../Common/StatusBar'
import Modal from '../Common/Modal'

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
      showModal: false,
      checkedTab: 'pending',
      displayedData: this.pendingData,
      widthDistribution: this.fourColWidthDistribution
    }
  }
  componentWillMount() {
    this.fetchData()
  }

  fetchData() {
    let timestamp = new Date().getTime()
    let allUrl = '/companies?timestamp='+timestamp
    let approvedUrl = '/companies?approved=1&timestamp='+timestamp
    let pendingUrl = '/companies?pending=1&timestamp='+timestamp
    fetch(pendingUrl)
    .then(result => result.json())
    .then(result => {
      this.pendingData = result
      this.setState({displayedData: result})
    }).catch(error => {
      this.onFetchError()
    })

    fetch(approvedUrl)
    .then(result => result.json())
    .then(result => {
      this.approvedData = result
    }).catch(error => {
      this.onFetchError()
    })
    
    fetch(allUrl)
    .then(result => result.json())
    .then(result => {
      this.allData = result
    }).catch(error => {
      this.onFetchError()
    })
  }

  onFetchError() {
    this.allData = allData
    this.pendingData = pendingData
    this.approvedData = approvedData
    this.setState({displayedData: this.pendingData})
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

  showModal() {
    this.setState({showModal: true})
  }

  onModalClose() {
    this.setState({showModal: false})
    this.fetchData()
  }

  render() {
    let statusIcon;
    switch (this.props.status) {
      case 'PENDING':
        statusIcon = <span className="fa fa-circle-o fa-1x color-yellow"/>
        break;
      case 'APPROVED':
        statusIcon = <span className="fa fa-check-square fa-1x color-green"/>  
        break;
      case 'NOT_APPLIED':
      default:
        statusIcon = <span className="fa fa-circle fa-1x color-orange"/>          
        break;
    }
    return (<Row className='dbl-padding-top dbl-margin-bottom container-relative'>
      { this.state.showModal && <Modal caller='approval' display={this.state.showModal} modalClose={this.onModalClose.bind(this)}/> }    
      <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
        <Row>
          <h2> VIEW APPLICATION </h2>
          <StatusBar name={this.props.name} status={this.props.status} />
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
                                fetchData={this.fetchData.bind(this)}
                                showModal={this.showModal.bind(this)}
                                data={entry}
                                status={this.props.status}
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