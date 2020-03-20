import movieFunction from './MovieFunction';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    movieFunction: movieFunction
});
export default allReducers;