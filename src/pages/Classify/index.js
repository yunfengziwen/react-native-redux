import React from 'react';
import {Button, View, Text, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../../redux/actions/MathAction';

class Classify extends React.Component {
  render() {
    const skin = this.props.HomeData.skin
    return (
      skin?(<View>
        <Image source={{uri:skin.acpic_center}} style={{width:375,height:375}}></Image>
      </View>):'a'
    )
  }
}


const mapStateToProps = state => ({
  HomeData: state.MathReducer.HomeData
})

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(Actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Classify);
