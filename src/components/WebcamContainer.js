import React, { Component } from 'react';
import '../styles/styles.scss';
import Webcamview from './WebcamView.js'
import ScreenshotList from '../elements/ScreenshotList'
import ImageModal from '../elements/ImageModal'
class WebcamContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            screenshots: [],
            pause: false
        }

    }

    updateScreenshots = (e) =>{
        if(e){
            var screenshots = [...this.state.screenshots]
            screenshots.unshift(e)
            this.setState({
                screenshots: screenshots
            })
        }
    }

    enlargeImage = (e) => {
        this.setState({
            pause: true,
            imgPreview: e
        })
    }

    closeModal = () => {
        this.setState({
            pause: false,
            imgPreview: null
        })
    }

    render() {
        return(
            <div className="Webcam-container">
                {this.state.pause && <ImageModal image={this.state.imgPreview} closeModal={this.closeModal}/>}
                <Webcamview restart={this.props.restart} settings={this.props.values} updateScreenshots={this.updateScreenshots.bind(this)} pause={this.state.pause}/>
                <h1>Your photos: </h1>
                {this.state.screenshots.length > 0 && <ScreenshotList enlargeImage={this.enlargeImage.bind(this)} screenshots={this.state.screenshots}/>}

            </div>
        )
    }
}

export default WebcamContainer;
