import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';

const AuthStack = createStackNavigator();

export const AuthNavigator = () => {
    return (
        <AuthStack.Navigator initialRouteName="login" >
            <AuthStack.Screen name='login' component={LoginScreen} options={{ headerShown: false }} />
        </AuthStack.Navigator>
    )
}