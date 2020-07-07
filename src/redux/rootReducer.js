import { combineReducers } from 'redux';
import { imagesReduces } from "./images/reducer";
import { viewReduces } from "./view/reducer";

const rootReducer = combineReducers({
    images: imagesReduces,
    view: viewReduces,
});

export default rootReducer;
