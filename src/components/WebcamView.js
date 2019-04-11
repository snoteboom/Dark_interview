import React, { Component } from 'react';
import '../styles/styles.scss';
import Webcam from "react-webcam";
import Button from '../elements/Button'
class WebcamView extends Component {

    constructor(props){
        super(props)
        this.state = {
            timer: 0,
            max: this.props.settings.maxAmount || null
        }
        this.interval = null
        this.frequency = null
        this.timer = null
    }

    componentDidMount() {
        this.setState({
            timer: this.props.settings.frequency || 1
        })
        this.frequency = this.props.settings.frequency * 1000
        this.interval = setInterval(() => this.takeScreenShot(), this.frequency );
        this.timer = setInterval(() =>this.setState({
            timer:  this.state.timer === 0? this.props.settings.frequency || 1 : this.state.timer - 1
        }), 1000);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.pause === true){
            clearInterval(this.interval)
            clearInterval(this.timer)
        }else if(this.props.pause === true && nextProps.pause === false){
            this.setState({
                timer: this.props.settings.frequency || 1,
            }, ()=>{
                this.interval = setInterval(() => this.takeScreenShot(), this.frequency);
                this.timer = setInterval(() =>this.setState({
                    timer:  this.state.timer === 0? this.props.settings.frequency || 1 : this.state.timer - 1
                }), 1000);
            })
        }
    }

    setRef = webcam => {
        this.webcam = webcam;
    };

    takeScreenShot=()=>{
        if(this.state.max > 0 || !this.state.max){
            this.setState({
                timer: 0,
                max: this.state.max? this.state.max - 1 : null
            },()=>{
                const imageSrc = this.webcam.getScreenshot();
                this.props.updateScreenshots(imageSrc)
                if(this.state.max === 0){
                    clearInterval(this.interval)
                    clearInterval(this.timer)
                }
            })
        }

    }
    render() {
        return (
            <div className="WebcamView">
                <h1>Smile! Your picture will be taken in {this.state.timer} </h1>
                {this.state.max || this.state.max === 0 ? <h2>You have {this.state.max} photos left</h2> : <h2></h2>}
                <Button text="Restart" clickAction={this.props.restart}/>
                <Webcam
                    audio={false}
                    height={350}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={350}
                />
            </div>
        );
    }
}

export default WebcamView;
