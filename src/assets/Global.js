
import React, { Component } from "react";
import _ from 'lodash'
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    Button,
    ScrollView,
    SectionList,
    Dimensions
} from "react-native";
import Api from './util/Api'; // 全局api 
import request from './util/Index';

const UI_STANDARD = 375;
class Constant {
    // static fontSizeXSmall = scaleFontSizeFunc(14);//字体
    static colorDefault = '#D81D40'; // 颜色
    static sizeMarginDefault = 10;  // 尺寸
    static yellow = "#FFAF22"
    // 自适应屏幕（以iOS为模板）
    static scale(width) {
        return Dimensions.get('window').width / UI_STANDARD * width;
    }
}
console.log('global')
const Log = (...params) => { // 全局Log
    if (GLOBAL.__DEV__) {
        console.log(params);
    }
}


// 导出
global.request = request
global.Log = Log;
global.Api = Api;
// global.Config = Config;
global.Constant = Constant;
