import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { loginStyle } from './login.style';

import LogstateContext from '../components/LoggedContext';

const LogstateSetter = (navigation, setLogstateContext) => {
    setLogstateContext(true);
    return navigation.navigate('Home');
}

export const LoginScreen: () => Node = ({navigation, props}) => {

    const [LogstateContext, setLogstateContext] = React.useState(false);

    return (
        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.view}>
                <Card>
                    <Card.Title title="Example Login" titleStyle={loginStyle.cardTitle}></Card.Title>
                    <Card.Content>
                        <TextInput label="Email" keyboardType="email-address"></TextInput>
                        <TextInput label="Password" secureTextEntry={true}></TextInput>
                        <Button uppercase={false} style={loginStyle.cardButton}>Forgot email/password?</Button>
                        <Button mode="contained" 
                        style={loginStyle.cardButton}
                        onPress={() => LogstateSetter(navigation, setLogstateContext)}
                        >Login</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );
};