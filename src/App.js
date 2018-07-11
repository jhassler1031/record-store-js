import React, { Component } from 'react';
import './App.css';

import Band from './components/Band.js';

//static data ==================================================================
let bandData = [
  {
    id: 1,
    name: "Nirvanna",
  },
  {
    id: 2,
    name: "Bob Marley and the Wailers"
  },
  {
    id: 3,
    name: "Beastie Boys"
  }
]

//Start app ====================================================================

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bandData: bandData
    }

    this._deleteBand = this._deleteBand.bind(this);
  }

  _deleteBand(band) {
    let bands = this.state.bandData;
    bands.splice(bands.indexOf(band), 1);
    this.setState({bands});
  }

  render() {

    let self = this;
    let $bands = this.state.bandData.map((band)=> {
      return (
        <Band key={band.id} band={band} deleteBand={()=>self._deleteBand(band)}/>
      )
    });

    return (
      <div className="App container">
        <div className="row justify-content-center">
          {$bands}
        </div>
      </div>
    );
  }
}

export default App;
