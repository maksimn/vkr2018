import { combineReducers } from 'redux';
import allCarAccidentsCoords from './allCarAccidentsCoords';
import viewFlags from './viewFlags';
import nearestAccident from './nearestAccident';

const reducers = combineReducers({
    allCarAccidentsCoords,
    viewFlags,
    nearestAccident
});

export default reducers;