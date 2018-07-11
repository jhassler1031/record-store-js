import React, { Component } from 'react';
import './Album.css';

import Track from './Track.js';

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

  }

  render() {

    let self = this;
    let $tracks = this.state.tracks.map((track)=> {
      return (
        <Track key={track.id} track={track} deleteTrack={()=>this._deleteTrack(track)} />
      )
    });
    return (
      <div className="col-12 albumContainer">
        <p className="albumName">{this.props.album.albumName}</p>

        <div className="row justify-content-center">
          <p>Tracks</p>
          {$tracks}
          {/* <AlbumForm addAlbum={this._addAlbum}/> */}
        </div>

        <input type="button" className="btn btn-danger" value="Delete Album" onClick={this.props.deleteAlbum}/>

      </div>
    );
  }
}

export default Album;
