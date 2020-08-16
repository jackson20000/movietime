import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Swiper from 'react-native-swiper';
import Horizontallist from './horizontallist';
import HorizontallistSmall from './horizontallistsmall';
import { ScrollView,  } from 'react-native-gesture-handler';
import Trailer from './trailer';

export default function HomeComp({ navigation, upcoming = [], popular = [], newmovie = [], slider = [] }) {
    return (
        <View style={{ flex: 1, paddingVertical: 15, backgroundColor: 'white' }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Icon name={'bars'} size={25} color="#363636" />
                </TouchableOpacity>
                <View >
                    <Text style={{ fontFamily: 'Roboto', color: '#fb5558', fontSize: 26, fontWeight: '700', marginLeft: 45 }}>movietime</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name={'search'} style={{ marginRight: 15 }} size={25} color="#363636" />
                    <Icon name={'user'} size={25} color="#363636" />
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ height: 204, marginTop: 15, paddingHorizontal: 15 }}>
                    {slider.length > 0 && <Swiper
                        showsButtons={true}
                        autoplay={true}
                        dotColor="white"
                        activeDotColor="white"
                        activeDotStyle={{ width: 30 }}
                        autoplayTimeout={5}
                        showsButtons={false}
                    >
                        {slider.map((val, index) => (<View key={'slide'+index}>
                            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${val}` }} resizeMode={'cover'} style={{ width: '100%', height: '100%', borderRadius: 7 }} />
                        </View>))}
                    </Swiper>}
                </View>
                <View style={{ marginTop: 15 }}>
                    {popular.length > 0 && <Horizontallist popular={popular} title={'MOST POPULAR MOVIES'} navigation={navigation} />}
                </View>
                {newmovie.length > 0 && <HorizontallistSmall movies={newmovie} title={'NEW'} navigation={navigation} />}
                <Trailer title={'TRAILERS'} />
                <View style={{ marginTop: 15 }}>
                    {upcoming.length > 0 && <HorizontallistSmall movies={upcoming} title={'COMING SOON'} navigation={navigation} />}
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
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