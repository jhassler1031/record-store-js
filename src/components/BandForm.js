import React, { Component } from 'react';
import './BandForm.css';

class BandForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      albums: []
    }

    this._handleInput = this._handleInput.bind(this);
    this._addBand = this._addBand.bind(this);
  }

  _handleInput(event) {
    let content = event.target.value;
    if (event.target.name === "name") {
      this.setState({name: content});
    }
  }

  _addBand(event) {
    event.preventDefault();
    let context = this.state;
    this.props.addBand(context);
    this.setState({name: ''});
  }

  render() {
    return (
      <form onSubmit={this._addBand} className="bandForm">
        <div className="form-group">
          <label htmlFor="bandInput">Enter Band Name</label>
          <input name="name" type="text" className="form-control" id="bandInput" placeholder="Enter Band Name" value={this.state.name} onChange={this._handleInput}/>
        </div>

          <button type="submit" className="btn btn-primary">Add Band</button>
      </form>
    );
  }
}

export default BandForm;
