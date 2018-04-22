import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    TabNavigator,
    TabBarBottom
} from 'react-navigation';
import Home from 'app/src/pages/Home/Home';
import Menu from 'app/src/pages/Menu/Menu';

const Routes = TabNavigator(
  {
    Home: { screen: Home },
    Menu: { screen: Menu },
    Offers: { screen: Home },
    Events: { screen: Home },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
              iconName = `ios-home${focused ? '' : '-outline'}`;
          } 
          else if (routeName === 'Menu') {
              iconName = `ios-nutrition${focused ? '' : '-outline'}`;
          }
          else if (routeName === 'Offers') {
              iconName = `ios-pricetags${focused ? '' : '-outline'}`;
          }
          else if (routeName === 'Events') {
              iconName = `ios-calendar${focused ? '' : '-outline'}`;
          }

          return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#22c6a0',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default Routes;