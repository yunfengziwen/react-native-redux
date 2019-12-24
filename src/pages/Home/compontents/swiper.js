import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../../../redux/actions/MathAction';
const {width} = Dimensions.get('window');

import Swiper from 'react-native-swiper';

 class Index extends Component {
  render() {
    return this.props.HomeData.banner != undefined ? (
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          height={140}
          // onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          dot={
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
          activeDot={
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                backgroundColor: '#000',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
          paginationStyle={{
            bottom: 20,
            // left: null, right: 10
          }}
          autoplay={true}>
          {this.props.HomeData.banner &&
            this.props.HomeData.banner.map((item,index) => {
              return (
                <View key={index}>
                  {/* <Text>{item.name}</Text>
                  <Text>{item.image}</Text> */}
                  <Image style={styles.container} source={{uri: item.image}} />
                </View>
              );
            })}
        </Swiper>
      </View>
    ) : (
      <View>
        <Text>暂无数据</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: width,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width,
    height: 120,
    flex: 1,
  },
});


const mapStateToProps = state => ({
  HomeData: state.MathReducer.HomeData
})

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(Actions, dispatch)}
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);