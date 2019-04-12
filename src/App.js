import React, { Component } from 'react';
import './styles/styles.scss';
import WebcamView from './components/WebcamContainer'
class App extends Component {


  render() {
    return (
      <div className="App">
          <WebcamView/>
      </div>
    );
  }
}

export default App;
