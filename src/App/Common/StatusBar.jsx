import React, { Component } from 'react'
import {
  Row, Col
} from 'react-bootstrap'

class StatusBar extends Component {
  constructor(props) {
    super(props)
    
    this.state = {}
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
    return <h4 className='pull-right'> 
        NAME: {this.props.name} <span className='half-margin-left'/> STATUS: {statusIcon} {this.props.status} 
    </h4>
  }
}

export default StatusBar