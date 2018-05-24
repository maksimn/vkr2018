import {
    SHOW_ALL_ACCIDENTS,
    HIDE_ALL_ACCIDENTS
} from '../actions/constants';

const initState = {
    isAllAccidentsVisible: false
};

const viewFlags = (state = initState, action) => {
    switch (action.type) {
        case SHOW_ALL_ACCIDENTS: {
            return {
                ...state,
                isAllAccidentsVisible: true
            };
        }
        case HIDE_ALL_ACCIDENTS: {
            return  {
                ...state,
                isAllAccidentsVisible: false
            };
        }
        default: {
            return state;
        }
    }
}

export default viewFlags;