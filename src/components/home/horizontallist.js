import React from 'react'
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Horizontallist({ title, popular, navigation, pagetype }) {

    return (<>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
            <Text style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: 15, color: '#363636' }}>{title}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('movielist', { type: pagetype })}>
                <Text style={{ fontFamily: 'Roboto', fontSize: 15, color: '#77c8b2' }}>Show all</Text>
            </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {popular.map((val, index) => {
                return (
                    <View key={val.id+'mlist'} style={{ marginRight: 15, marginLeft: index===0 ? 15 : 0, paddingVertical: 15, backgroundColor: 'white' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('moviedetails', { id: val.id })}>
                            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${val.poster_path}` }} resizeMode={'contain'} style={{ height: 220, width: 148, borderRadius: 15 }} />
                            <Text style={{ fontFamily: 'Roboto', fontWeight: '700', marginTop: 8, color: '#363636', width: 148 }}>{val.original_title}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name={'star'} size={13} color="gold" style={{ marginRight: 8, marginTop: 3 }} solid />
                                <Text style={{ fontFamily: 'Roboto', color: 'gray' }}>{val.vote_average}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </ScrollView>
    </>)
}

const styles = StyleSheet.create({

});