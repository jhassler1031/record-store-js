import React, { Component } from 'react';
import './Track.css';

class Track extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="col-12 trackContainer">
        <p className="trackName">{this.props.track.trackName}</p>
        <input type="button" className="btn btn-danger" value="Delete Track" onClick={this.props.deleteTrack}/>
      </div>
    );
  }
}

export default Track;
