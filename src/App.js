import React from 'react';
import './App.css';
import SwitchButtonsContainer from "./components/SwitchButtonsContainer/SwitchButtonsContainer";
import ImageContainer from "./components/imagesContainer/ImagesContainer";
import Button from "@material-ui/core/Button";
import {getIMages} from "./redux/images/actions";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()
    return (
        <div>
            <SwitchButtonsContainer/>
            <ImageContainer/>
            <div className='refresh'>
                <Button variant="contained" onClick={() => dispatch(getIMages())} color='primary'>Refresh</Button>
            </div>
        </div>
    );
}

export default App;
