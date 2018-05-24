import { combineReducers } from 'redux';
import allCarAccidentsCoords from './allCarAccidentsCoords';
import viewFlags from './viewFlags';

const reducers = combineReducers({
    allCarAccidentsCoords,
    viewFlags
});

export default reducers;