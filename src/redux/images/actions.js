import {actionTypes} from './actionTypes';
import axios from 'axios';

export const getIMages = () => {
    return async(dispatch) => {
        try{
            const { data } = await axios.get('https://api.jonathanczyzyk.com/api/v1/images/small',
                {headers: {'x-api-key': 'api-key-f88829df-7315-4738-b804-ee24d5307e46'}});
            const shuffled = data.sort(function(){return .5 - Math.random()});

            const selected=shuffled.slice(0, 5);
            dispatch(({type: actionTypes.GET_IMAGES_SUCCESS, payload: selected}));
        } catch (error) {
            dispatch(({type: actionTypes.GET_IMAGES_FAILED, payload: {error}}));
        }
    };
};
