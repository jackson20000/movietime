import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { logoutAction } from '../redux/actions/login.action';

export default function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={{ padding: 15, borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                    <Text style={{fontSize: 17, fontWeight: '700', fontFamily: 'Roboto'}}>DEAN WINCHESTER</Text>
                </View>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="home"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Home"
                    onPress={() => { props.navigation.navigate('Home') }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="user"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Profile"
                    onPress={() => { props.navigation.navigate('Home') }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="heart"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Favorite"
                    onPress={() => { props.navigation.navigate('Home') }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="star"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Recommendation"
                    onPress={() => { props.navigation.navigate('Home') }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="cogs"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Settings"
                    onPress={() => { props.navigation.navigate('Home') }}
                />
            </DrawerContentScrollView>
            <View>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="sign-out-alt"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={()=>{props.dispatch(logoutAction());props.navigation.closeDrawer()}}
                />
            </View>
        </View>
    )
}
