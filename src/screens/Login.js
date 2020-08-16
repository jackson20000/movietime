import React from 'react'
import LoginComponent from '../components/login/login'
import { connect } from 'react-redux';
import { loginAction } from '../redux/actions/login.action';
import { loaderAction } from '../redux/actions/loaderAction';
import Toast from 'react-native-simple-toast';

function LoginScreen({state, dispatch}) {
    const login =(username, password) => {
        dispatch(loaderAction(true));
        fetch(`https://reqres.in/api/login`,{
            method: 'POST',
            body: JSON.stringify({
                email: username,
                password
            }),
            headers : { 'Content-Type': 'application/json' }
        }).then(res=>res.json()).then(val=>{
            dispatch(loaderAction(false));
            if(val.error){
                Toast.showWithGravity('username/password incorrect', Toast.LONG, Toast.BOTTOM);
            }else{
                dispatch(loginAction({isLoggedin: true, token: val.token}))
            }
        }).catch(err=>{

        })
    }

    return (
        <LoginComponent login={login} />
    )
}

const mapStateToProps = (state) => {
    return {
        state: state.login
    }
}

export default connect(mapStateToProps)(LoginScreen);