import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home'
import MovieDetails from '../screens/MovieDetails';
import CastScreen from '../screens/Cast';
import MovieList from '../screens/MovieList';
import Search from '../screens/Search';
import Fav from '../screens/Fav';

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator initialRouteName={'home'}>
            <MainStack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />  
            <MainStack.Screen name="moviedetails" component={MovieDetails} options={{ headerShown: false }} />  
            <MainStack.Screen name="cast" component={CastScreen} options={{ headerShown: false }} />  
            <MainStack.Screen name="movielist" component={MovieList} options={{ headerShown: false }} />  
            <MainStack.Screen name="search" component={Search} options={{ headerShown: false }} />  
            <MainStack.Screen name="fav" component={Fav} options={{ headerShown: false }} />
        </MainStack.Navigator>
    );
};

