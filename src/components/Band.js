import React, { Component } from 'react';

class Band extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="col-12 bandContainer">
        <h1 className="bandName">{this.props.band.name}</h1>
      </div>
    );
  }
}

export default Band;
