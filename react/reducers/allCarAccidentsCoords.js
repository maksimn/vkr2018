import {
    LOAD_ALL_ACCIDENTS_COORDS_START,
    LOAD_ALL_ACCIDENTS_COORDS_SUCCESS,
    LOAD_ALL_ACCIDENTS_COORDS_ERROR
} from '../actions/constants';
import {groupAccidentsByLocation} from '../groupAccidentsByLocation';

const allCarAccidentsCoords = (state = null, action) => {
    switch (action.type) {
        case LOAD_ALL_ACCIDENTS_COORDS_START: {
            return null;
        }
        case LOAD_ALL_ACCIDENTS_COORDS_SUCCESS: {
            const dataArray = action.response.data;

            return groupAccidentsByLocation(dataArray);
        }
        case LOAD_ALL_ACCIDENTS_COORDS_ERROR: {
            return null;
        }
        default: {
            return state;
        }
    }
}

export default allCarAccidentsCoords;
