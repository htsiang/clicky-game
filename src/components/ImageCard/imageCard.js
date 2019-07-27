import React from 'react';
import "./style.css";

function ImageCard(props) {
    return (
        <img src={require ('../../images/' + props.imgsrc)} alt="" className="img-thumbnail"></img>
    );
};

export default ImageCard;