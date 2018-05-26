import { combineReducers } from 'redux';
import allCarAccidentsCoords from './allCarAccidentsCoords';
import viewFlags from './viewFlags';
import nearestAccident from './nearestAccident';
import accidentsWithinPolygon from './accidentsWithinPolygon';

const reducers = combineReducers({
    allCarAccidentsCoords,
    viewFlags,
    nearestAccident,
    accidentsWithinPolygon
});

export default reducers;