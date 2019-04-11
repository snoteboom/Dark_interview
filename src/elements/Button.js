import React from 'react';

const Button = ({text, clickAction}) =>{
    return(
        <div className="button" onClick={()=>clickAction()}>
            <h1>{text}</h1>
        </div>
    );
}

export default Button
