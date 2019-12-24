import React from 'react';
import { Button, View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import {formatTime} from '../../../../src/assets/util/filter'
import { bindActionCreators } from 'redux';
import * as Actions from '../../../../redux/actions/MathAction';
import CountDown from './CountDown'

class limit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      diff:0
    };
  }
  render() {
    const foot_activity = this.props.HomeData.foot_activity
    return (
      foot_activity ? (
        <FlatList
          data={foot_activity}
          style={{marginLeft:5,marginTop:20}}
          numColumns = {2}
          keyExtractor={(item, index) => index}
          renderItem={({item,index}) => (
            index == 0?(
              <View style={{position:"relative"}}>
                <CountDown end_time={item.end_time}></CountDown>
                <Image source={{uri:item.app_pic}} style={styles.app_pic}></Image>
              </View>
            ):(
              <Image source={{uri:item.app_pic}} style={styles.app_pic}></Image>
            )
          )}
        />
      ) : (
          <Text>暂无数据</Text>
        )

    );
  }
  componentDidMount() {
    // this.retuceCountTime()
  }
}

const styles = StyleSheet.create({
  foot_activity: {
    flex:1,
    flexDirection: "row",
  },
  app_pic:{
    width:Constant.scale(175),
    height:Constant.scale(130),
    marginLeft:5,
    marginBottom:10
  },
  CountDown:{
    position:'absolute',
    right:10,
    top:6,
    zIndex:1,
    color:'#fff'
  }
});

const mapStateToProps = state => ({
  HomeData: state.MathReducer.HomeData,
  // diff:state.MathReducer.diff
})

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(Actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(limit);
