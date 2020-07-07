import React, {useContext, useEffect} from 'react';
import './ImageContainer.css';
import ImageList from "./imagesList/ImageList";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {getIMages} from "../../redux/images/actions";

const ImageContainer = () => {
    const dispatch = useDispatch();
    const { images } = useSelector(state => state.images);

    useEffect(() => {
        dispatch(getIMages())
    }, []);

    return (
        <div className='images-container'>
            <ImageList images={images}/>
        </div>);
};

export default ImageContainer;
