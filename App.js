/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import type {Node} from 'react';

import { Provider as PaperProvider } from 'react-native-paper';
import { LoginScreen } from './app/screens/login/login.screen';
import { HomeScreen } from './app/screens/home/home.screen';
import { theme } from './App.style';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerItems from './app/screens/components/DrawerItems';

const Drawer = createDrawerNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      drawerType="front"
      initialRouteName="Login"
      screenOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 10},
      }}
      >
        {
          DrawerItems.map(drawer=><Drawer.Screen
            key={drawer.name}
            name={drawer.name}
            component={
              drawer.name==='Login' ? LoginScreen
                : drawer.name==='Home' ? HomeScreen
                : LoginScreen
            } 
          />)
        }
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
