import React, { Component } from 'react';
import './styles/styles.scss';
import WebcamPermissions from './elements/WebcamPermissions'
import WebcamView from './components/WebcamContainer'
class App extends Component {
  constructor(props){
      super(props)
      this.state = {
          showWebcam: false,
          values: {
              frequency: 1,
              maxAmount: null
          }
      }
  }

  allowWebcamUse = () => {
      this.setState({
          showWebcam: true,
      })
  }

  updateValues = (type, value) => {
      if(value > 0 || !value){
          var values = this.state.values
          values[type] = value
          this.setState({
              values: values
          })
      }
  }

  restart = () => {
      this.setState({
          showWebcam: false,
          values: {
              frequency: 1,
              maxAmount: null
          }
      })
  }

  render() {
    return (
      <div className="App">
          {this.state.showWebcam?
              <WebcamView values={this.state.values} restart={this.restart}/>
              :
              <WebcamPermissions values={this.state.values} updateValues={this.updateValues.bind(this)} allowPermissions={this.allowWebcamUse}/>
          }
      </div>
    );
  }
}

export default App;
