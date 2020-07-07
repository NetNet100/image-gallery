import {actionTypes} from "./actionTypes";

const viewState = {
    view: 'list'
};

export const viewReduces = (state = viewState, action) => {
    switch (action.type) {
        case actionTypes.SET_GALLERY :
            return {...state, view: 'gallery'};
        case actionTypes.SET_LIST :
            return {...state, view: 'list'};
        default:
            return state
    }
};
