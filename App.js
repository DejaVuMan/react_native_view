/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import { Provider as PaperProvider } from 'react-native-paper';
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
