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
        albumName: "Nevermind",
        tracks: [
          {
            id: 1,
            trackName: "Track 1"
          },
          {
            id: 2,
            trackName: "Track 2"
          }
        ]
      },
      {
        id: 2,
        albumName: "In Utero",
        tracks: [
          {
            id: 3,
            trackName: "Track 1"
          },
          {
            id: 4,
            trackName: "Track 2"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Bob Marley and the Wailers",
    albums: [
      {
        id: 3,
        albumName: "Legend",
        tracks: [
          {
            id: 5,
            trackName: "Track 1"
          },
          {
            id: 6,
            trackName: "Track 2"
          }
        ]
      },
      {
        id: 4,
        albumName: "Natural Mystic",
        tracks: [
          {
            id: 7,
            trackName: "Track 1"
          },
          {
            id: 8,
            trackName: "Track 2"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Beastie Boys",
    albums: [
      {
        id: 5,
        albumName: "Licensed to Ill",
        tracks: [
          {
            id: 9,
            trackName: "Track 1"
          },
          {
            id: 10,
            trackName: "Track 2"
          }
        ]
      },
      {
        id: 6,
        albumName: "Hello Nasty",
        tracks: [
          {
            id: 11,
            trackName: "Track 1"
          },
          {
            id: 12,
            trackName: "Track 2"
          }
        ]
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

  //Add/Delete Bands ===========================================================
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
        <Band key={band.id} band={band} deleteBand={()=>self._deleteBand(band)} />
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
