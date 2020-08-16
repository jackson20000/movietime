import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { style } from './style';
import Toast from 'react-native-simple-toast';

export default function LoginComponent(props) {

    const [credential, setcredential] = useState({
        username: 'eve.holt@reqres.in',
        password: 'cityslicka'
    });

    const onSubmit = ()=>{
        if(props.login){
            if(credential.username != '' && credential.password != ''){
                props.login(credential.username, credential.password);
            }else{
                Toast.showWithGravity('Please enter username and password.', Toast.LONG, Toast.BOTTOM);
            }
        }
    };

    return (
        <View style={style.container}>
            <View style={{ alignItems: 'center', marginBottom: 55 }}>
                <Text style={style.heading}>Welcome to Movietime!</Text>
                <Text style={{ color: '#A1A1A1' }}>Your personal guide to the world of cinema</Text>
            </View>
            <View style={{ width: '100%' }}>
                <TextInput value={credential.username} onChangeText={val=>setcredential(preval=>({...preval, username: val}))} placeholder="Email, phone number, username" style={style.input} />
                <TextInput value={credential.password} onChangeText={val=>setcredential(preval=>({...preval, password: val}))} secureTextEntry={true} placeholder="Password" secureTextEntry={true} style={style.input} />
                <Text style={{ color: '#7CCDB7' }}>Forgot your password?</Text>
            </View>
            <View style={{ width: '100%', marginVertical: 40 }}>
                <TouchableOpacity style={style.loginbtn} onPress={onSubmit}>
                    <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', padding: 12, fontFamily: 'Roboto' }}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: '100%' }}>
                <Text style={{ color: '#A1A1A1', textAlign: 'center' }}>or continue with</Text>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginVertical: 20 }}>
                    <TouchableOpacity style={style.fbbutton}>
                        <Image resizeMode={'cover'} style={{ width: 20, height: 20, marginRight: 8 }} source={{ uri: 'https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19751.png' }}></Image>
                        <Text style={{ color: 'white' }}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.googlebtn}>
                        <Image resizeMode={'cover'} style={{ width: 20, height: 20, marginRight: 10 }} source={{ uri: 'https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/2659939281579738432-512.png' }}></Image>
                        <Text style={{ color: '#A1A1A1' }}>Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.signup}>
                    <Text style={{ color: '#363636', fontFamily: 'Roboto' }}>Don't have an account?</Text>
                    <TouchableOpacity ><Text style={{ color: '#7CCDB7', fontFamily: 'Roboto' }}> SIGN UP</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
