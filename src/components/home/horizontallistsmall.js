import React from 'react'
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HorizontallistSmall({ navigation, title, movies = [], pagetype }) {

    return (<>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
            <Text style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: 15, color: '#363636' }}>{title}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('movielist', { type: pagetype })}>
                <Text style={{ fontFamily: 'Roboto', fontSize: 15, color: '#77c8b2' }}>Show all</Text>
            </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {movies.map((val, index) => {
                return (
                    <View key={val.id+'list'} style={{ marginRight: 15, marginLeft: index === 0 ? 15 : 0, paddingVertical: 15, backgroundColor: 'white' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('moviedetails', { id: val.id })}>
                            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${val.poster_path}` }} resizeMode={'contain'} style={{ height: 160, width: 108, borderRadius: 15 }} />
                            <Text style={{ fontFamily: 'Roboto', fontWeight: '700', marginTop: 8, color: '#363636', width: 108 }}>{val.title}</Text>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </ScrollView>
    </>)
}

const styles = StyleSheet.create({

});