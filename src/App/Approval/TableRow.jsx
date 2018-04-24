import React, { Component } from 'react';
import { MorphIcon } from 'react-svg-buttons';
import './TableRow.css';

class TableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moreContentDisplay: false,
    }
  }

  onCickView() {
    let previousContentState = this.state.moreContentDisplay;
    this.setState({
      moreContentDisplay: !previousContentState
    });
  }

  render() {
    let itemWidth = this.props.widthDistribution.map( w => {
        return 'width-' + w.toString();
    });
    let index = -1;
    let {data} = this.props;

    if (this.props.isTableTitle)
      return <div className='table-row table-title'>
        <ul>
          { data.map( d => {
              index = index+1;
              return <li className={itemWidth[index]}> {data[index]} </li>;
            })
          }
        </ul>
      </div>;
    
    let displayStyle = 'table-row ';
    if (this.state.moreContentDisplay) {
      displayStyle += 'more-content-show';
    } else {
      displayStyle = 'table-row ';
    }

    return <div className={displayStyle}>
      <ul className='nfl'>
        <li className={itemWidth[0]}><span> {data['name']} </span></li>
        <li className={itemWidth[1] + ' text-align-left'}><a href={data['url']}> {data['url']} </a></li>
        <li className={itemWidth[2]}>
          <MorphIcon  type='bars' 
                      size={25}
                      thickness={2} 
                      color='var(--blue)'
                      onClick={this.onCickView.bind(this)}/>
        </li>
        <li className={itemWidth[3]}>
          <MorphIcon  className='half-margin-right'
                      type='check' 
                      size={25}
                      thickness={2}
                      color='var(--green)'/>
          <MorphIcon  type='cross'
                      size={25}
                      thickness={2}
                      color='var(--orange)'/>
        </li>
      </ul>
      <ul className='half-margin-top table-more-content'> {data['certificate']} </ul>
    </div>
  }
}

export default TableRow;