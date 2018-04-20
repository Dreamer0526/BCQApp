import React, { Component } from 'react';
import {
  Row, Col
} from 'react-bootstrap';
import './TableRow.css';

class TableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {}
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
      
    return <h2> {this.props.data} </h2>;
  }
}

export default TableRow;