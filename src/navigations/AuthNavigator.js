import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginComponent from '../components/login/login';
import HomeComp from '../components/home/home';

const AuthStack = createStackNavigator();

export const AuthNavigator = () => {
    return (
        <AuthStack.Navigator initialRouteName="login" >
            <AuthStack.Screen name='login' component={HomeComp} options={{ headerShown: false }} />
        </AuthStack.Navigator>
    )
}