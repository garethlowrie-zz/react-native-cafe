import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Routes from 'app/src/routes/Routes';
import compose from 'recompose/compose';
import withContext from 'recompose/withContext';
import lifecycle from 'recompose/lifecycle';
import withState from 'recompose/withState';
import firebase from 'firebase';

class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

export default compose(
    withState('db', 'setDb', null),
    lifecycle({
        componentDidMount() {
            const firebaseConfig = {
                apiKey: 'AIzaSyCTNTWK5e-4GNqjUpJq3SF0xtCRfSMDktU',
                authDomain: 'thestaithscafe.firebaseapp.com',
                databaseURL: 'https://thestaithscafe.firebaseio.com',
                projectId: 'thestaithscafe',
                storageBucket: 'thestaithscafe.appspot.com',
                messagingSenderId: '983371270219'
            };
            const firebaseApp = firebase.initializeApp(firebaseConfig);
            this.props.setDb(firebaseApp.database().ref());
        }
    }),
    withContext(
        {
            db: PropTypes.any
        },
        ({ db }) => ({
            db
        })
    )
)(App);
