import React, { Component } from 'react';
import Cell from './components/cell.js';
import ArtistModal from './components/artistModal.js';
import Key from './components/key.js';
import './App.css';
import data from './OTGDY_Data.json';
import ReactModal from 'react-modal';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      selectedCell: null
    };
    this.setSelectedCell  = this.setSelectedCell.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  setSelectedCell(Cell){
    this.setState({selectedCell: Cell, showModal: true })
  }
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {

    this.Cells = data.map ((item)=> {
      //console.log (item)
      return item? (
        <Cell {...item} setSelectedCell = {this.setSelectedCell} />
      ) : null;
    })
    this.ArtistModal = data.map((item)=>{
      const cellID = `${item.First}-${item.Last}`;
      if(cellID===this.state.selectedCell){
      return item? (
        <ArtistModal {...item} selectedCell = {this.state.selectedCell} />
      ) : null;
    }
    })
    this.Causes = data.map ((item)=>{
      return item.Cause;
    })
    this.Keys = Array.from(new Set(this.Causes)).map((item)=> {
      return item? (
        <Key Cause = {item} />
      ) : null;
    })

    return (
      <div className="App">
        <header className="App-header">
          <h1>OTGDY</h1>
          <div className="key">{ this.Keys }</div>
        </header>
        <div to="/" className="Cells">
          { this.Cells }
        </div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLable="Minimal Modal Example"
          className="Modal"
          ariaHideApp={false}
          overlayClassName="Overlay">
            <button onClick={this.handleCloseModal} className="Modal-close-button">Close</button>
              { this.ArtistModal }
        </ReactModal>
      </div>
    );
  }
}

export default App;
