import {
    FIND_ACCIDENTS_WITHIN_POLYGON_START,
    FIND_ACCIDENTS_WITHIN_POLYGON_SUCCESS,
    FIND_ACCIDENTS_WITHIN_POLYGON_ERROR
} from '../actions/constants';

const accidentsWithinPolygon = (state = null, action) => {
    switch (action.type) {
        case FIND_ACCIDENTS_WITHIN_POLYGON_START: {
            return null;
        }
        case FIND_ACCIDENTS_WITHIN_POLYGON_SUCCESS: {
            return action.data;
        }
        case FIND_ACCIDENTS_WITHIN_POLYGON_ERROR: {
            return null;
        }
        default: {
            return state;
        }
    }
}

export default accidentsWithinPolygon;