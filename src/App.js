import React, { Component } from 'react';
import './App.css';

import Band from './components/Band.js';
import BandForm from './components/BandForm.js';

//static data ==================================================================
let bandData = [
  {
    id: 1,
    name: "Nirvanna",
    albums: [
      {
        id: 1,
        albumName: "Nevermind"
      },
      {
        id: 2,
        albumName: "In Utero"
      }
    ]
  },
  {
    id: 2,
    name: "Bob Marley and the Wailers",
    albums: [
      {
        id: 1,
        albumName: "Legend"
      },
      {
        id: 2,
        albumName: "Natural Mystic"
      }
    ]
  },
  {
    id: 3,
    name: "Beastie Boys",
    albums: [
      {
        id: 1,
        albumName: "Licensed to Ill"
      },
      {
        id: 2,
        albumName: "Hello Nasty"
      }
    ]
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
    this._addBand = this._addBand.bind(this);
  }

  _deleteBand(band) {
    let bands = this.state.bandData;
    bands.splice(bands.indexOf(band), 1);
    this.setState({bands});
  }

  _addBand(band) {
    let bands = this.state.bandData;
    bands.push(band);
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

        <div className="row justify-content-center">
          <BandForm addBand={this._addBand}/>
        </div>
      </div>
    );
  }
}

export default App;
