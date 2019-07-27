import React, { Component } from 'react';
import ImageCard from '../ImageCard/imageCard';
import './style.css';

class Wrapper extends Component {
    render() {
        return (
            <div className='wrapper'>
                {this.props.imgsrc.map((image) =>
                    <ImageCard imgsrc={image} key={image} onClick={this.props.onClick} />
                )}
            </div>
        );
    }
};

export default Wrapper;