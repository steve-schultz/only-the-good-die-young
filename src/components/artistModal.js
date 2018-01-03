import React, { Component } from 'react';
import '../App.css';

class ArtistModal extends Component {
  render() {
    const cellClassName = this.props.Cause.replace(/\s/gi, '-').toLowerCase();

    return (
      <div className={`modal-info ${cellClassName}`}>
        <h1>{this.props.First} {this.props.Last}</h1>
        <h2>{this.props.Band}</h2>
        <h3>{this.props.Age}</h3>
        <div className="spotify-player">
          <iframe src={this.props.SongURI} width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
        </div>
      </div>
    );
  }
}

ArtistModal.defaultProps = {
    First: 'Dennes',
    Last: 'Boon',
    Band: 'Minutemen',
    Age: '27',
    Year: '1985',
    Cause: 'Car Accident'
};

export default ArtistModal;
