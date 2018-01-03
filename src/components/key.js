import React, { Component } from 'react';
import '../App.css';

class Key extends Component {
  render() {
    const cellClassName = this.props.Cause.replace(/\s/gi, '-').toLowerCase();
    return (
      <div className={`key-color ${cellClassName}`}>
        <div></div>
        <div className="key-title">{this.props.Cause}</div>
      </div>
    );
  }
}

Key.defaultProps = {
    Artist: 'Dennes Boon',
    Band: 'Minutemen',
    Age: '27',
    Year: '1985',
    Cause: 'Car Accident'
};

export default Key;
