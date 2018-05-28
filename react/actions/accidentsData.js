import axios from 'axios';

import {
    LOAD_ALL_ACCIDENTS_COORDS_START,
    LOAD_ALL_ACCIDENTS_COORDS_SUCCESS,
    LOAD_ALL_ACCIDENTS_COORDS_ERROR,
    SHOW_ALL_ACCIDENTS,
    HIDE_ALL_ACCIDENTS,
    GET_NEAREST_ACCIDENT_START,
    GET_NEAREST_ACCIDENT_SUCCESS,
    GET_NEAREST_ACCIDENT_ERROR,
    FIND_ACCIDENTS_WITHIN_POLYGON_START,
    FIND_ACCIDENTS_WITHIN_POLYGON_SUCCESS,
    FIND_ACCIDENTS_WITHIN_POLYGON_ERROR
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

export const getNearestAccident = coords => {
    return dispatch => {
        dispatch({ type: GET_NEAREST_ACCIDENT_START });

        axios.get(`/nearest/${JSON.stringify(coords)}`).then(response => {
            dispatch({ type: GET_NEAREST_ACCIDENT_SUCCESS, data: response.data });
        }).catch(err => {
            dispatch({ type: GET_NEAREST_ACCIDENT_ERROR, err });
        });
    }
}

export const findAccidentsWithinPolygon = coordinates => {
    return dispatch => {
        dispatch({ type: FIND_ACCIDENTS_WITHIN_POLYGON_START, coordinates });

        axios.get(`/polygon/${JSON.stringify(coordinates)}`).then(response => {
            dispatch({ type: FIND_ACCIDENTS_WITHIN_POLYGON_SUCCESS, data: response.data });
        }).catch(err => {
            dispatch({ type: FIND_ACCIDENTS_WITHIN_POLYGON_ERROR, err });
            dispatch({ type: HIDE_ALL_ACCIDENTS });
        }); 
    }    
}

export const showAllAccidents = () => ({ type: SHOW_ALL_ACCIDENTS });
export const hideAllAccidents = () => ({ type: HIDE_ALL_ACCIDENTS });
