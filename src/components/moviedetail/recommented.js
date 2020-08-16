import React from 'react';
import { StyleSheet, Image, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import moment from 'moment';

export default function Recommented({ title, Recommendation, navigation }) {

    return (
        <>
            {Recommendation.length > 0 && <><View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingHorizontal: 15 }}>
                <Text style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: 15, color: '#363636' }}>{title}</Text>
                <Text style={{ fontFamily: 'Roboto', fontSize: 15, color: '#77c8b2' }}>Show all</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {Recommendation.map((val, index, data) => {
                    return (
                        <TouchableOpacity key={val.id+'movid'} onPress={()=>navigation.push('moviedetails',{id: val.id})}>
                        <View style={{ marginRight: 15, marginLeft: index === 0 ? 15 : 0, paddingVertical: 15, backgroundColor: 'white' }}>
                            <Image source={val.poster_path ? { uri: `https://image.tmdb.org/t/p/w500${val.poster_path}` } : require('../../assets/image-not-available.jpg')} resizeMode={'contain'} style={{ height: 160, width: 108, borderRadius: 15 }} />
                            <Text style={{ fontFamily: 'Roboto', fontWeight: '700', marginTop: 8, color: '#363636', width: 108 }}>{val.original_title}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Roboto', color: 'gray' }}>{moment(val.release_date).format('YYYY')}</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView></>}
        </>
    )
}

const styles = StyleSheet.create({

});