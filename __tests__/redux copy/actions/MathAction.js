// MathAction中的每一个方法都会创建一个state并返回，用于区分行动类型
import * as type from './MathType'
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