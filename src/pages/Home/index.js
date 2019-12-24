import React from 'react';
import {Button, View, Text, StyleSheet, Image, FlatList,ScrollView,ImageBackground} from 'react-native';
import Swiper from './compontents/swiper'
import Adver from './compontents/adver'
import Limit from './compontents/limit'
import  MyCarousel from './compontents/MyCarousel'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../../redux/actions/MathAction';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ad:[],
      banner:[],
      icon:[]
    }
  }
  render() {
    console.log(this.state.selected_topic)
     let pic = this.props.HomeData && this.props.HomeData.top_activity ? this.props.HomeData.top_activity.app_pic : '';
     let selected_topic = this.props.HomeData && this.props.HomeData.selected_topic ? this.props.HomeData.selected_topic: [];
    return (
      <ScrollView>
        <Swiper />
        <Adver ></Adver>
        {/* <Text>{this.state.value}</Text> */}
        <FlatList 
          data={this.state.icon}
          numColumns = {5}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <View style={style.icon}>
              <Image source={{uri:item.icon}} style={{width:24,height:24}}></Image>
              <Text style={{marginTop:6}}>{item.name}</Text>
            </View>
          )}
        />
        <View>
          {
            pic?(<Image source={{uri:pic}} style={{width:Constant.scale(355),height:Constant.scale(185),marginLeft:10,marginTop:20}}></Image>):<Text></Text>
          }
        </View>
        <Limit></Limit>
        <View style={style.title}>
          <Text>新品上市</Text>
          <Text> ></Text>
        </View>
        <View style={{marginBottom:100}}>
          <MyCarousel></MyCarousel>
        </View>
        <View style={style.title}>
          <Text>口嗨礼包</Text>
          <Text> ></Text>
        </View>
        <FlatList
            data={selected_topic}
            horizontal={true}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => (
              <ImageBackground source={{uri:item.images}} style={item.images,{ width:255,height:200}}>
                <View style={style.topic}>
                  <Text style={style.name}>{item.name}</Text>
                  <Text style={style.content}>{item.content}</Text>
                </View>
              </ImageBackground>
            )}
          />
      </ScrollView>
    );
  }
  componentWillMount() {
    console.log(new Date(),'start')
    request(Api.appDataHome, {
      t: '1',
      lang: 'zh',
      token: 'b187dc898189f265e8111ba256cb628f9c236512',
    }).then(res => {
        let data = {};
        data = Object.assign({}, this.state, res.content);
        console.log(new Date(),'end')
        this.props.actions.AddappDataHome(data)
        this.setState(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

const style = StyleSheet.create({
  icon:{
    alignItems: 'center',
    width:Constant.scale(375/5),
    marginTop:10,
  },
  title:{
    flex:1,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center',
    marginLeft:10,
    marginRight:10,
    marginTop:25,
    marginBottom:25,
  },
  images:{
    // position:'relative'
  },
  topic:{
    // position:'absolute',
    // bottom:0,
    // left:0
  },
  name:{
    color:'#fff'
  }
})

const mapStateToProps = state => ({
  HomeData: state.MathReducer.HomeData
})

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(Actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
