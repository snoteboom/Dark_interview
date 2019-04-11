import React from 'react';
import Button from './Button'
const WebcamPermissions = ({values, allowPermissions, updateValues}) => {
    return(
        <div className="webcam-permissions">
            <h1>Welcome to your at home photo shoot!</h1>
            <p>How often would you like you photo taken? </p>

            <div className="form-row">
                <p>Every</p>
                <input type="number" value={values.frequency} onChange={(e)=>{updateValues("frequency", e.target.value)}}/>
                <p>Seconds</p>
            </div>

            <p>How many photos would you like to take? (optional)</p>
            <input type="number" value={values.maxAmount} onChange={(e)=>{updateValues("maxAmount", e.target.value)}}/>
            <p> Once you hit 'Start' the camera will take 1 photo every {values.frequency} seconds {values.maxAmount? "and will take " + values.maxAmount + " photos total" :""} so be sure to keep changing poses.</p>
            <Button text="Start" clickAction={allowPermissions}/>
        </div>
    );
}



export default WebcamPermissions
