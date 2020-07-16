import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Swiper from 'react-native-swiper';

export default function HomeComp() {
    return (
        <View style={{ flex: 1, padding: 15, backgroundColor: 'white' }}>
            <View style={styles.header}>
                <Icon name={'bars'} size={25} color="#363636" />
                <View >
                    <Text style={{ fontFamily: 'Roboto', color: '#fb5558', fontSize: 26, fontWeight: '700', marginLeft: 45 }}>movietime</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name={'search'} style={{ marginRight: 15 }} size={25} color="#363636" />
                    <Icon name={'user'} size={25} color="#363636" />
                </View>
            </View>
            <View style={{height: 200, marginTop: 15}}>
                <Swiper 
                showsButtons={true} 
                autoplay={true} 
                dotColor="white" 
                activeDotColor="white"
                activeDotStyle={{width: 30}}
                autoplayTimeout={5}
                showsButtons={false}
                >
                    <View>
                        <Image source={{uri: 'https://image.tmdb.org/t/p/w500/okpodI7zyPwWsAm2yF5yva6Ea5h.jpg'}} resizeMode={'cover'} style={{ width: '100%', height: '100%', borderRadius: 8 }} />
                    </View>
                    <View>
                        <Image source={{uri: 'https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg'}} resizeMode={'cover'} style={{ width: '100%', height: '100%', borderRadius: 8 }} />
                    </View>
                    <View>
                        <Image source={{uri: 'https://image.tmdb.org/t/p/w500/re3ZvlKJg04iLpLRf1xTKHS2wLU.jpg'}} resizeMode={'contain'} style={{ width: '100%', height: '100%', borderRadius: 8 }} />
                    </View>
                    <View>
                        <Image source={{uri: 'https://image.tmdb.org/t/p/w500/gavyCu1UaTaTNPsVaGXT6pe5u24.jpg'}} resizeMode={'contain'} style={{ width: '100%', height: '100%', borderRadius: 8 }} />
                    </View>
                    <View>
                        <Image source={{uri: 'https://image.tmdb.org/t/p/w500/mMtUybQ6hL24FXo0F3Z4j2KG7kZ.jpg'}} resizeMode={'contain'} style={{ width: '100%', height: '100%', borderRadius: 8 }} />
                    </View>
                </Swiper>
            </View>
            <View>
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})