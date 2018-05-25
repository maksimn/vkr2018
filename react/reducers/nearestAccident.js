import {
    GET_NEAREST_ACCIDENT_START,
    GET_NEAREST_ACCIDENT_SUCCESS,
    GET_NEAREST_ACCIDENT_ERROR
} from '../actions/constants';

const nearestAccident = (state = null, action) => {
    switch (action.type) {
        case GET_NEAREST_ACCIDENT_START: {
            return null;
        }
        case GET_NEAREST_ACCIDENT_SUCCESS: {
            return action.data;
        }
        case GET_NEAREST_ACCIDENT_ERROR: {
            return null;
        }
        default: {
            return state;
        }
    }
}

export default nearestAccident;
