/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import './src/assets/Global';
import Index from './src/index'

// index.js
import { Provider } from "react-redux";
import store from "./redux/store/store";


class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}
export default App;