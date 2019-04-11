import React from 'react';

const ScreenshotView = ({screenshots}) =>{
    return(
        <div className="screenshot-view">
            {screenshots.map((img, idx)=>{
                return <img className="screenshot"
                            key={"img" +idx}
                            src={`${img}`}
                            alt={`screenshot number ${idx}`}
                />
            })}
        </div>
    );
}

export default ScreenshotView
