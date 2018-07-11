import React, { Component } from 'react';
import './AlbumForm.css';

class AlbumForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      albumName: ''
    }

    this._handleInput = this._handleInput.bind(this);
    this._addAlbum = this._addAlbum.bind(this);
  }

  _handleInput(event) {
    let content = event.target.value;
    if (event.target.name === "albumName") {
      this.setState({albumName: content});
    }
  }

  _addAlbum(event) {
    event.preventDefault();
    let context = this.state;
    this.props.addAlbum(context);
    this.setState({albumName: ''});
  }

  render() {
    return (
      <form onSubmit={this._addAlbum} className="albumForm">
        <div className="form-group">
          <label htmlFor="albumInput">Enter Album Name</label>
          <input name="albumName" type="text" className="form-control" id="albumInput" placeholder="Enter Album Name" value={this.state.name} onChange={this._handleInput}/>
        </div>

          <button type="submit" className="btn btn-primary">Add Album</button>
      </form>
    );
  }
}

export default AlbumForm;
