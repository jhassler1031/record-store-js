import React, { Component } from 'react';
import './Album.css';

class Album extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-12 albumContainer">
        <p className="albumName">{this.props.album.albumName}</p>
        <input type="button" className="btn btn-danger" value="Delete Album" onClick={this.props.deleteAlbum}/>

      </div>
    );
  }
}

export default Album;
