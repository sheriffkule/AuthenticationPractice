import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../store/auth-contex';

function WelcomeScreen() {
  const [fetcedMessage, setFetchedMessage] = useState('');

  const authCtx = useContext(AuthContext);
  const token = authCtx.token();

  useEffect(() => {
    axios
      .get(
        'https://expense-tracker-60f7d-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=' +
          token,
      )
      .then(response => {
        setFetchedMessage(response.data);
      });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetcedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
