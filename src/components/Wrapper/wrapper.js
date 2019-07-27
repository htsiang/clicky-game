import React from 'react';
import ImageCard from '../ImageCard/imageCard';
import './style.css';

let imgArr = ['1.jpg', '2.jpg', '3.gif', '4.gif', '5.gif', '6.gif', '7.jpg', '8.gif' , '9.gif', '10.jpg', '11.gif', '12.gif'];

function shuffle(arr) {
    for (let i=arr.length-1; i>0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    return arr;
};

function Wrapper() {

    shuffle(imgArr);

    return (
        <div className='wrapper'>
            {imgArr.map((image) => 
                <ImageCard imgsrc={image} key={image} />
            )}
        </div>
    );
};

export default Wrapper;