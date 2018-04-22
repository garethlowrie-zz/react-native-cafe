import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    TabNavigator,
    TabBarBottom
} from 'react-navigation';
import Routes from 'app/src/routes/Routes';

class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

export default App;