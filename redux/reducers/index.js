// index，导入的时候直接写包名，会自动导入index
import { combineReducers } from 'redux';
import MathReducer from './MathReducer'

export default combineReducers({
    MathReducer
});