import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import { AuthNavigator } from './AuthNavigator';
import { connect } from 'react-redux';

function AppNavigator(props) {
    console.log(props)
    return (
        <NavigationContainer>
            {props.state.login.isLoggedin ? <DrawerNavigator {...props} /> : <AuthNavigator />}
        </NavigationContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(AppNavigator);
