import React, { Component } from 'react';
import { MorphIcon } from 'react-svg-buttons';
import './TableRow.css';

class TableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moreContentDisplay: false,
      loading: false,
    }
  }

  onCickView() {
    let previousContentState = this.state.moreContentDisplay;
    this.setState({
      moreContentDisplay: !previousContentState
    });
  }

  renderCert(cerData) {
    return <div>
      { cerData.map( row => {
          return <p>{row}</p>
        })
      }
    </div>
  }

  onApprove = () => {
    this.setState({
      loading: true
    })

    let data = {
      address: this.props.data.address
    }
    fetch( '/approve', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => {
      setTimeout(() => {
        this.props.showModal()
        this.setState({
          loading: false,
        })
      }, 3000)
    }).catch(console.error)
  }

  render() {
    let index = -1;
    let {data} = this.props;
    let itemWidth = this.props.widthDistribution.map( w => {
        return 'width-' + w.toString();
    });

    // render for table title
    if (this.props.isTableTitle) {
      return <div className='table-row table-title'>
        <ul>
          { data.map( d => {
              index = index+1;
              return <li className={itemWidth[index]}> {data[index]} </li>;
            })
          }
        </ul>
      </div>
    }

    // render for table body
    let cerData = data['caCert'].split('\n');
    let cerHeight = cerData.length * 15;    
    let displayStyle = this.state.moreContentDisplay? {height: 85+cerHeight+'px'}: {};

    return <div className='table-row container-relative' style={displayStyle}>
      {
        this.state.loading && <div className='icon-bg'>
        <img  className='icon-loader'
              src={require('../../Common/svg-loaders/bars.svg')} /> 
      </div>
      }
      <ul className='nfl'>
        <li className={itemWidth[0]}><span> {data['name']} </span></li>
        <li className={itemWidth[1] + ' text-align-center'}><a href={data['homeUrl']}> {data['homeUrl']} </a></li>
        <li className={itemWidth[2]}>
          <MorphIcon  type='bars' 
                      size={25}
                      thickness={2} 
                      color='var(--blue)'
                      onClick={this.onCickView.bind(this)}/>
        </li>
        {this.props.isPendingTab && <li className={itemWidth[3]}>
            <MorphIcon  className='half-margin-right'
                        onClick={this.onApprove.bind(this)}
                        type='check' 
                        size={25}
                        thickness={2}
                        color={this.props.status === 'APPROVED'? 'var(--green)': 'var(--light-bg)'}/>
            <MorphIcon  type='cross'
                        onClick={this.props.onDeny}
                        size={25}
                        thickness={2}
                        color={this.props.status === 'APPROVED'? 'var(--orange)': 'var(--light-bg)'}/>                        
          </li>
        }
      </ul>
      <ul className='half-margin-top table-more-content'> 
        {this.renderCert(cerData)}
      </ul>
    </div>
  }
}

export default TableRow;