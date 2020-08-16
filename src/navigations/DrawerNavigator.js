import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  MainNavigator from './MainNavigator';
import DrawerContent from '../screens/DrawerContent';

const DrawerStack = createDrawerNavigator();

export const DrawerNavigator = (_props) => {
    return (
        <DrawerStack.Navigator drawerContent={props => <DrawerContent {...props} {..._props} />}>
            <DrawerStack.Screen name='home' isFetch={true} component={MainNavigator} />
        </DrawerStack.Navigator>
    );
};
