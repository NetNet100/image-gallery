import {actionTypes} from "./actionTypes";

const imageState = {
    images: []
};

export const imagesReduces = (state = imageState, action) => {
    switch (action.type) {
        case actionTypes.GET_IMAGES_SUCCESS :
            return {...state, images: action.payload};
        default:
            return state
    }
};
