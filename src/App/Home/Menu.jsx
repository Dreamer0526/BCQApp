import React, { Component } from 'react'
import {
  Row, Col
} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Menu.css'

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    let {status} = this.props
    let showMenuStyle = {
        opacity: 1,
        width: '100%',
    }
    let hideMenuStyle = {
        opacity: 0,
        width: '1000%',
    }
    let displayStyle = this.props.display? showMenuStyle: hideMenuStyle;
    let titleContent = 'Wrong user status to enter this section.'

    return <div className='menu-bg' style={displayStyle}>
        <div className='menu-wrap'>
            <Col lg={11} lgOffset={1}>
                <Row className='menu-title menu-title-yellow'>
                    <span className='underline-placeholder underline-yellow'/>
                    <div className='menu-entry menu-entry-yellow'>
                        <a  className={status !== 'NOT_APPLIED' && 'forbidden'} 
                            href={status === 'NOT_APPLIED'? '#/application': "#"}
                            title={status !== 'NOT_APPLIED'? titleContent: ''}>
                            APPLICATION
                        </a>
                    </div>
                </Row>
                <Row className='dbl-margin-top menu-title'>
                    <span className='underline-placeholder underline-orange'/>
                    <div className='menu-entry menu-entry-orange'>
                        <a  href='#/approval'>
                            MEMBER LIST
                        </a>
                    </div>
                </Row>
                <Row className='dbl-margin-top menu-title'>
                    <span className='underline-placeholder underline-green'/> 
                    <div className='menu-entry menu-entry-green'>                
                        <a  className={status === 'NOT_APPLIED' && 'forbidden'} 
                            href={status !== 'NOT_APPLIED'? '#/update': '#'}
                            title={status === 'NOT_APPLIED'? titleContent: ''}>
                            UPDATE
                        </a>
                    </div>
                </Row>
            </Col>
        </div>
    </div>
  }
}

export default Menu;
