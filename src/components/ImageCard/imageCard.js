import React from 'react';
import "./style.css";

function ImageCard(props) {
    return (
        <img src={require ('../../images/' + props.imgsrc)} data-id={props.imgsrc} alt="" className="img-thumbnail" onClick={props.onClick}></img>
    );
};

export default ImageCard;