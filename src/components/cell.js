import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class Cell extends Component {
  constructor(props){
    super(props);

    this.cellID = `${this.props.First}-${this.props.Last}`;
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick ()  {
    this.props.setSelectedCell(this.cellID);  
  }
  render() {
    const cellClassName = this.props.Cause.replace(/\s/gi, '-').toLowerCase();

    return (
      <div className="cell Cells--grid" onClick={this.handleClick}>
      <div className="cell--block">
        <div className="cell--bg">
          <div className={`wrapper ${cellClassName}`}>
          </div>
          <div className={`bottom ${cellClassName}`}>
          </div>
        </div>
        <div className={`info ${cellClassName}`}>
          <div className="name">{this.props.First} {this.props.Last}</div>
          <div className="band">{this.props.Band}</div>
          <div className="age">{this.props.Age}</div>
        </div>
        </div>
      </div>
    );
  }
}
Cell.propTypes = {
    setSelectedCell: PropTypes.func,

};

Cell.defaultProps = {
    First: 'Dennes',
    Last: 'Boon',
    Band: 'Minutemen',
    Age: '27',
    Year: '1985',
    Cause: 'Car Accident'
};

export default Cell;
