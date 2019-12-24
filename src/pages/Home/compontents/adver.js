import React from 'react';
import { Button, View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../../../redux/actions/MathAction';
class adver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }
  AdsetTime = () => {
    setInterval(() => {
      this.setState({
        index: ++this.state.index
      })
      if (this.state.index == 3) {
        this.setState({
          index: 0
        })
      }
    }, 5000);
  }
  render() {
    const ad = this.props.HomeData.ad
    return (
      ad ? (
        <View>
          <View style={styles.ad}>
            <View style={styles.adLeft}>
              <View style={styles.adLeftBg}></View>
              <Text>口嗨快报</Text>
            </View>
            <View style={styles.adInfo}>
              <View style={{ marginTop: (-44 * this.state.index) }}>{
                ad && ad.map((item, index) => {
                  return (
                    <View key={index} style={styles.adTitle}>
                      <Text style={{ flex: 0.2, color: 'red', textAlign: 'center' }}>{item.title}</Text>
                      <Text style={{ flex: 0.8 }} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
                    </View>
                  )
                })
              }</View>
            </View>
          </View>
        </View>
      ) : (
          <Text>暂无数据</Text>
        )

    );
  }
  componentDidMount() {
    this.AdsetTime()
  }
}

const styles = StyleSheet.create({
  ad: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    paddingLeft: 10,
    paddingRight: 10
  },
  adLeft: {
    flex: 0.2,
    color: Constant.colorDefault,
  },
  adLeftBg: {
    width: 6,
    height: 24,
    backgroundColor: Constant.yellow,
    position: 'absolute',
    left: 0,
    top: -5,
  },
  adTitle: {
    color: Constant.colorDefault,
    marginRight: 10,
    flexDirection: 'row',
    height: 44,
    alignItems: 'center',
  },
  adInfo: {
    flex: 0.8,
    overflow: 'hidden',
    height: 44,
  },
});

const mapStateToProps = state => ({
  HomeData: state.MathReducer.HomeData
})

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(Actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(adver);
