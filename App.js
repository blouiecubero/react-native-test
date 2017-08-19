import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import firebase from 'firebase';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyAHFWnMr4Km-p_mxPWXCBE0d6uB6d6gQD8",
      authDomain: "one-time-password-e888e.firebaseapp.com",
      databaseURL: "https://one-time-password-e888e.firebaseio.com",
      projectId: "one-time-password-e888e",
      storageBucket: "one-time-password-e888e.appspot.com",
      messagingSenderId: "122537275307"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
