import React from 'react';
import Image from "./image/Image";

const ImageList = ({images}) => {
    return (
        <>
            {images?.length > 0 &&
                images.map((image, i) => {
                    return <Image image={image} key={i}/>
                })
            }
        </>
    );
};

export default ImageList;
