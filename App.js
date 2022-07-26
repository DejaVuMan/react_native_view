/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import { LoginScreen } from './app/screens/login/login.screen';
import { theme } from './App.style';

const App: () => Node = () => {
  return (
    <PaperProvider theme= {theme}>
      <LoginScreen/>
    </PaperProvider>
  );
};

export default App;
