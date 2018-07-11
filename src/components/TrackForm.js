import React, { Component } from 'react';

class TrackForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      trackName: ''
    }

    this._handleInput = this._handleInput.bind(this);
    this._addTrack = this._addTrack.bind(this);

  }

  _handleInput(event) {
    let content = event.target.value;
    if (event.target.name === "trackName") {
      this.setState({trackName: content});
    }
  }

  _addTrack(event) {
    event.preventDefault();
    let context = this.state;
    this.props.addTrack(context);
    this.setState({trackName: ''});
  }

  render() {
    return (
      <form onSubmit={this._addTrack} className="trackForm">
        <div className="form-group">
          <label htmlFor="trackInput">Enter Album Name</label>
          <input name="trackName" type="text" className="form-control" id="trackInput" placeholder="Enter Track Name" value={this.state.name} onChange={this._handleInput}/>
        </div>

          <button type="submit" className="btn btn-primary">Add Track</button>
      </form>
    );
  }
}

export default TrackForm;
