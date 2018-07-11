import React, { Component } from 'react';
import './Band.css';

import Album from './Album.js';

class Band extends Component {

  constructor(props) {
    super(props);

    //not sure this will work
    this.state = {
      albums: this.props.band.albums
    }

    this._deleteAlbum = this._deleteAlbum.bind(this);
  }

  _deleteAlbum(album) {
    let albums = this.state.albums;
    albums.splice(albums.indexOf(album), 1);
    this.setState({albums});
  }


  render() {

    let self = this;
    let $albums = this.state.albums.map((album)=> {
      return (
        <Album key={album.id} album={album} deleteAlbum={()=>self._deleteAlbum(album)}/>
      )
    });

    return (
      <div className="col-12 bandContainer">
        <h1 className="bandName">{this.props.band.name}</h1>

        <div className="row justify-content-center">
          <p>Albums</p>
          {$albums}
        </div>

        <input type="button" className="btn btn-danger" value="Delete Band" onClick={this.props.deleteBand}/>
      </div>
    );
  }
}

export default Band;
