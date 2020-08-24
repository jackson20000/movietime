import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import moment from 'moment';
import Pulse from '../../shared/loader/bars/Pulse';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width } = Dimensions.get('screen');

export default function List({ list = [], navigation, loading, setcurrentpage, pagetype }) {

    const renderFooter = () => {
        //it will show indicator at the bottom of the list when data is loading otherwise it returns null
        if (!loading) return null;
        return (
            <View style={styles.activityIndicatorWrapper}>
                <Pulse size={15} color="#fb5558" />
            </View>

        );
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity key={item.id + 'movid'} onPress={() => navigation.push('moviedetails', { id: item.id })}>
                <View style={{ paddingRight: 10, marginVertical: 8 }}>
                    <Image source={item.poster_path ? { uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` } : require('../../assets/image-not-available.jpg')} style={{ height: 180, width: ((width - 40) / 3), borderRadius: 5, borderColor: 'white', borderWidth: .5 }} />
                    <Text>{((item.title).length > 16) ?
                        (((item.title).substring(0, 16 - 3)) + '...') :
                        item.title}</Text>
                    <Text>{moment(item.release_date).format('YYYY')}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, paddingTop: 15, borderBottomColor: 'darkgray', borderWidth: .5, alignItems: 'center', backgroundColor: 'white', elevation: 5 }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Icon name={'chevron-left'} size={25} color="#363636" solid />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Roboto', color: '#fb5558', fontSize: 26, fontWeight: '700', marginTop: -5, paddingVertical: 5 }}>{pagetype.toUpperCase()}</Text>
                <Icon name={'ellipsis-v'} size={25} color="#363636" />
            </View>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    numColumns={3}
                    onEndReached={() => setcurrentpage(preval => preval + 1)}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={renderFooter}
                />
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10
    },
    activityIndicatorWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});