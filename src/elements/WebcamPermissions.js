import React from 'react';

const WebcamPermissions = ({allowPermissions}) => (
    <div className="webcam-permissions">
        <h1>Welcome to your at home photo shoot!</h1>
        <p> Hit start and smile to open your webcam</p>
        <h1 onClick={()=>allowPermissions()}>Start</h1>
    </div>
);



export default WebcamPermissions
