import React from 'react';
import { Button, View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import {formatTime} from '../../../../src/assets/util/filter'
import { bindActionCreators } from 'redux';
import * as Actions from '../../../../redux/actions/MathAction';

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      count: (+props.end_time*1000)-(+new Date()),
    };
    // this.count = this.count.bind(this);
  }
  count = ()=>{
    this.timer = setInterval(()=>{
      this.setState({
          count: this.state.count - 1000,
        }
      )
    }, 1000);
  }
  //加载完后
  componentDidMount() {
      this.count()
  }
  render() {
    if (this.state.count == 0) {
      clearInterval(this.timer);
    }
    return (
      <Text style={styles.CountDown}>倒计时：{formatTime(this.state.count)}</Text>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(CountDown);