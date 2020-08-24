import React from 'react';
import { View,TouchableOpacity, Text, SafeAreaView, FlatList, StyleSheet, Image , Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const { width } = Dimensions.get('screen');

export default function FavComponent({ navigation, state }) {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity key={item.id + 'movid'} onPress={() => navigation.push('moviedetails', { id: item.id })}>
                <View style={{ paddingRight: 10, marginVertical: 8 }}>
                    <Image source={item.poster_path ? { uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` } : require('../../assets/image-not-available.jpg')} style={{ height: 180, width: ((width - 40) / 3), borderRadius: 5, borderColor: 'white', borderWidth: .5 }} />
                    <Text>{((item.title).length > 16) ?
                        (((item.title).substring(0, 16 - 3)) + '...') :
                        item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, paddingTop: 15, borderBottomColor: 'darkgray', borderWidth: .5, alignItems: 'center', backgroundColor: 'white', elevation: 5 }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Icon name={'chevron-left'} size={25} color="#363636" solid />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Roboto', color: '#fb5558', fontSize: 26, fontWeight: '700', marginTop: -5, paddingVertical: 5 }}>Favourite</Text>
                <Icon name={'ellipsis-v'} size={25} color="#363636" />
            </View>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={state}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    numColumns={3}
                />
            </SafeAreaView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingLeft: 10
    }
});