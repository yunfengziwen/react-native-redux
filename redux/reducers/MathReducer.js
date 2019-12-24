// MathReducer最终会返回一个处理完毕的state
import * as type from '../actions/MathType'
const defaultState = {
    count: 5,
    factor: 1,
    HomeData:[],
    diff:0,
}

export default function MathReducer(state = defaultState, action) {
    console.log(action,'action')
    switch (action.type) {
        case type.INCREASE:
            return {
                ...state,
                count: state.count + state.factor
            };
        case type.DECREASE:
            return {
                ...state,
                count: state.count - state.factor
            };
        case type.RESET:
            return {
                ...state,
                count: 0
            };
        case type.ADDAPPDATAHOME:
            return {
                ...state,
                HomeData:action.data
            };
        case type.FORMATTIME:
           
            return {
                ...state,
                diff:action.data
            }
        default:
            return state;
    }
}