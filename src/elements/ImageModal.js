import React from 'react';
import Button from'./Button'
const ImageModal = ({image, closeModal}) =>{
    var downloadImage = function () {
        console.log("downloadImage")
        const url = window.URL.createObjectURL(new Blob([image], {type: 'image/jpeg'}));
        const link = document.createElement('a');
        link.style.display = 'none';
        link.href = url;
        link.setAttribute('download', 'photoshootImg.jpeg');
        document.body.appendChild(link);
        link.click();
    }
    return(
        <div className="image-modal">
            <div className="image-preview">
                <img src={`${image}`} alt=""/>
                <div className="button-container">
                    <Button text="Download" clickAction={downloadImage}/>
                    <Button text="Continue" clickAction={closeModal}/>
                </div>
            </div>
        </div>
    );
}

export default ImageModal
