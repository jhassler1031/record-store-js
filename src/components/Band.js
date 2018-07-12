import React, { Component } from 'react';
import './Band.css';

import Album from './Album.js';
import AlbumForm from './AlbumForm.js';

class Band extends Component {

  constructor(props) {
    super(props);

    //not sure this will work
    this.state = {
      albums: this.props.band.albums
    }

    this._deleteAlbum = this._deleteAlbum.bind(this);
    this._addAlbum = this._addAlbum.bind(this);
  }

  _deleteAlbum(album) {
    let albums = this.state.albums;
    albums.splice(albums.indexOf(album), 1);
    this.setState({albums});
  }

  _addAlbum(album) {
    let albums = this.state.albums;
    albums.push(album);
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

        {/* Add collapse for albums */}
        <a className="btn btn-primary" data-toggle="collapse" href={`#album${this.props.band.id}`} role="button" aria-expanded="false" aria-controls={`album${this.props.band.id}`}>Show Albums</a>


        <div id={`album${this.props.band.id}`} className="row justify-content-center collapse">
          <p className="col-12">Albums</p>
          {$albums}
          <div className="col-12">
            <AlbumForm addAlbum={this._addAlbum}/>
          </div>
        </div>

        <input type="button" className="btn btn-danger" value="Delete Band" onClick={this.props.deleteBand}/>
      </div>
    );
  }
}

export default Band;
