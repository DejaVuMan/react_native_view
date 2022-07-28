import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { loginStyle } from '../login/login.style';
import { Button } from 'react-native-paper';

export const HomeScreen: () => Node = () => {
    return (
        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.view}>
                <Button mode="contained" style={loginStyle.cardButton}>Button 1</Button>
                <Button mode="contained" style={loginStyle.cardButton}>Button 2</Button>
                <Button mode="contained" style={loginStyle.cardButton}>Button 3</Button>
            </View>
        </SafeAreaView>
    );
};