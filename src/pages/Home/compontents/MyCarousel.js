import React from 'react';
import { connect } from 'react-redux';
import {formatTime} from '../../../assets/util/filter'
import { bindActionCreators } from 'redux';
import * as Actions from '../../../../redux/actions/MathAction';

import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { View,Text,Dimensions, StyleSheet } from 'react-native';

const { width: screenWidth } = Dimensions.get('window')

class MyCarousel extends React.Component {

    _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.cover }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    dimensions={{width:160,height:230}}
                    parallaxFactor={0.1}
                    {...parallaxProps}
                />
                <Text style={styles.title} numberOfLines={2}>
                    { item.name }
                </Text>
            </View>
        );
    }

    render () {
      const xin_goods = this.props.HomeData.xin_goods
        return (
          xin_goods?<Carousel
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 60}
                data={xin_goods.goods}
                renderItem={this._renderItem}
                hasParallaxImages={true}
            />:<Text>'暂无数据'</Text>
        );
    }
}

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    borderRadius: 8,
    // width:160,
    // height:230,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
})
const mapStateToProps = state => ({
  HomeData: state.MathReducer.HomeData,
})

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(Actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCarousel);