import React, { Component } from 'react';
import './Album.css';

import Track from './Track.js';
import TrackForm from './TrackForm.js';

class Album extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tracks: this.props.album.tracks
    }

    this._deleteTrack = this._deleteTrack.bind(this);
    this._addTrack = this._addTrack.bind(this);
  }

  _deleteTrack(track) {
    let tracks = this.state.tracks;
    tracks.splice(tracks.indexOf(track), 1);
    this.setState({tracks});
  }

  _addTrack(track) {
    let tracks = this.state.tracks;
    tracks.push(track);
    this.setState({tracks});
  }

  render() {

    let self = this;
    let $tracks = this.state.tracks.map((track)=> {
      return (
        <Track key={track.id} track={track} deleteTrack={()=>this._deleteTrack(track)} />
      )
    });
    return (
      <div className="col-12  col-md-6 albumContainer">
        <p className="albumName">{this.props.album.albumName}</p>

        {/* Collapse/Open the track list */}
        <a className="btn btn-primary" data-toggle="collapse" href={`#track${this.props.album.id}`} role="button" aria-expanded="false" aria-controls={`track${this.props.album.id}`}>Show Tracks</a>

        <div id={`track${this.props.album.id}`} className="row justify-content-center collapse">
          <p className="col-12">Tracks</p>
          {$tracks}
          <div className="col-12">
            <TrackForm addTrack={this._addTrack}/>
          </div>
        </div>

        <div className="col-12">
          <input type="button" className="btn btn-danger" value="Delete Album" onClick={this.props.deleteAlbum}/>
        </div>

      </div>
    );
  }
}

export default Album;
