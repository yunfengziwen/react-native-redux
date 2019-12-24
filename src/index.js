import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import {  createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Home from "./pages/Home/index";
import Classify from './pages/Classify/index';
import Fish from './pages/Fish/index';
import Shop from './pages/Shop/index';
import User from './pages/User/index';


// import './assets/Global';

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22
  }
})
const getTabBarIcon = (navigation, focused, tintColor) => {
  // console.log(navigation.state)
  const { routeName } = navigation.state;
  let iconImg;
  if (routeName === '主页') {
    iconImg = focused ? 'https://kouhigh.kouhigh.top/upload/app/2019_08_12/be0e2201908120932339405.png' : 'https://kouhigh.kouhigh.top/upload/app/2019_08_12/13d4b20190812093215697.png'
  } else if (routeName === '分类') {
    iconImg = focused ? 'https://kouhigh.kouhigh.top/upload/app/2019_08_12/c5a63201908120934469550.png' : 'https://kouhigh.kouhigh.top/upload/app/2019_08_12/2db21201908120934428281.png'
  } else if (routeName === '分类') {
    iconImg = focused ? 'https://kouhigh.kouhigh.top/upload/app/2019_08_12/1d984201908120934286641.png' : 'https://kouhigh.kouhigh.top/upload/app/2019_08_12/2db21201908120934428281.png'
  } else if (routeName === '分类') {
    iconImg = focused ? 'https://kouhigh.kouhigh.top/upload/app/2019_08_12/be0e2201908120932339405.png' : 'https://kouhigh.kouhigh.top/upload/app/2019_08_12/2db21201908120934428281.png'
  }else{
    iconImg = focused ? 'https://kouhigh.kouhigh.top/upload/app/2019_08_12/be0e2201908120932339405.png' : 'https://kouhigh.kouhigh.top/upload/app/2019_08_12/be0e2201908120932339405.png'
  }
  return <Image source={{uri:iconImg}} style={styles.icon} />
};

// const TabBarComponent = props => <BottomTabBar {...props} />;

// const TabScreens = createBottomTabNavigator(
//   {
//     // other screens
//   },
//   {
//     tabBarComponent: props => (
//       <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} />
//     ),
//   }
// );

const TabNavigator = createBottomTabNavigator({
  '主页': {screen: Home},
  '分类': { screen: Classify },
  '鱼塘': { screen: Fish },
  '购物车': { screen: Shop },
  '我的': { screen: User },
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) =>
      getTabBarIcon(navigation, focused, tintColor),
  }),
  tabBarOptions: {
    activeTintColor: '#E7392A',
    inactiveTintColor: '#666666',
  },
  initialRouteName: "主页"
});

const RootStack = createStackNavigator(
  {
    Home: {
      screen: TabNavigator,
      // navigationOptions: ({ navigation }) => ({
      //   headerTitle: (
      //     navigation.state.index == 0 ? '首页' : navigation.state.index == 1 ? '发现' : '我的'
      //   ),
      // })
    },
    // Details: {
    //   screen: Details,
    //   navigationOptions: () => ({
    //     title: `列表详情`
    //   })
    // },
    // DetailsChild: {
    //   screen: DetailsChild,
    //   navigationOptions: () => ({
    //     title: `详情`
    //   })
    // },
    // Player: {
    //   screen: Player,
    // },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
