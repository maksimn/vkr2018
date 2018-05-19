import axios from 'axios';

import {
    LOAD_ALL_ACCIDENTS_COORDS_START,
    LOAD_ALL_ACCIDENTS_COORDS_SUCCESS,
    LOAD_ALL_ACCIDENTS_COORDS_ERROR
} from './constants';

export const loadAllAccidentsCoords = () => {
    return dispatch => {
        dispatch({ type: LOAD_ALL_ACCIDENTS_COORDS_START });

        axios.get('/carAccidents').then(response => {
            dispatch({ type: LOAD_ALL_ACCIDENTS_COORDS_SUCCESS, response });
        }).catch(err => {
            dispatch({ type: LOAD_ALL_ACCIDENTS_COORDS_ERROR, err });
        });
    };
}