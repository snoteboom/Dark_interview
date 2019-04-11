import React, { Component } from 'react';
import './styles/styles.scss';
import WebcamPermissions from './elements/WebcamPermissions'
import WebcamView from './components/WebcamContainer'
class App extends Component {
  constructor(props){
      super(props)
      this.state = {
          showWebcam: false
      }
  }

  allowWebcamUse = () => {
      this.setState({
          showWebcam: true
      })
  }

  render() {
    return (
      <div className="App">
          {this.state.showWebcam? <WebcamView/> : <WebcamPermissions allowPermissions={this.allowWebcamUse}/>}
      </div>
    );
  }
}

export default App;
