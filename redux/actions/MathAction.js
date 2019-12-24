// MathAction中的每一个方法都会创建一个state并返回，用于区分行动类型
import * as type from './MathType'
import {formatTime} from '../../src/assets/util/filter'

export function increase() {
    return {
        type: type.INCREASE
    }
};

export function decrease() {
    return {
        type: type.DECREASE
    }
};

export function reset() {
    return {
        type: type.RESET
    }
};
export const AddappDataHome = (value)=>{
    return {
        type: type.ADDAPPDATAHOME,
        data: value
    }
}
export const SetformatTime = value =>{
    let timer = null;
    //  timer && clearInterval(timer);
    //  timer = setInterval(() => {
    //     if(value<0){
    //         clearInterval(timer)
    //         return false;
    //     }
    //     value--;
    //     console.log(value)
    //     return {
    //         type:type.FORMATTIME,
    //         data:value
    //     }
      
    // }, 1000);
         return {
            type:type.FORMATTIME,
            data:value
        }
}