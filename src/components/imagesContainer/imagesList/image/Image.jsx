import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './image.css';

const Image = ({image}) => {
    return (
        <span className='image-card'>
            <img src={image.url} className='image'/>
            <FavoriteIcon className='like'/>
            <span className='text'>{image.likes}</span>
        </span>
        );
};

export default Image;
