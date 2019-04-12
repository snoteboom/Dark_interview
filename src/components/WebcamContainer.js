import React, { Component } from 'react';
import '../styles/styles.scss';
import Webcamview from './WebcamView.js'
class WebcamContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            screenshots: []
        }

    }

    updateScreenshots = (img) =>{
        if(img){
            var screenshots = [...this.state.screenshots]
            screenshots.unshift(img)
            this.setState({
                screenshots: screenshots
            })
        }
    }

    render() {
        return(
            <div className="Webcam-container">
                <Webcamview updateScreenshots={this.updateScreenshots.bind(this)}/>
                {this.state.screenshots.map((img, idx)=>{
                    return <img className="screenshot"
                                key={"img" +idx}
                                src={`${img}`}
                                alt={`screenshot number ${idx}`}
                    />
                })}
            </div>
        )
    }
}

export default WebcamContainer;
