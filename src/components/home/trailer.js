import React from 'react';
import { YouTubeStandaloneAndroid } from 'react-native-youtube';
import { Thumbnail } from 'react-native-thumbnail-video';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Trailer({ title }) {
    const play = (id) => {
        YouTubeStandaloneAndroid.playVideo({
            apiKey: 'AIzaSyAXQ4q6GU-t6-1VYAZe8UoSoRin1Ik41mo', // Your YouTube Developer API Key
            videoId: id, // YouTube video ID
            autoplay: true, // Autoplay the video
            startTime: 0, // Starting point of video (in seconds)
        })
            .then(() => console.log('Standalone Player Exited'))
            .catch(errorMessage => console.error(errorMessage));
    };
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                <Text style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: 15, color: '#363636' }}>{title}</Text>
                <Text style={{ fontFamily: 'Roboto', fontSize: 15, color: '#77c8b2' }}>Show all</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection: 'column', marginRight: 20, marginLeft: 20}}>
                    <View style={styles.thumbnail}>
                        <Thumbnail url={`https://www.youtube.com/watch?v=6ZfuNTqbHE8`} iconStyle={styles.iconStyle} imageWidth={'100%'} imageHeight={130} onPress={() => play('6ZfuNTqbHE8')} />
                    </View>
                    <Text style={{ fontFamily: 'Roboto', fontWeight: '700', marginTop: 5, color: '#363636' }}>Avengers</Text>
                </View>
                <View style={{flexDirection: 'column', marginRight: 20}}>
                    <View style={styles.thumbnail}>
                        <Thumbnail url={`https://www.youtube.com/watch?v=6ZfuNTqbHE8`} iconStyle={styles.iconStyle} imageWidth={'100%'} imageHeight={130} onPress={() => play('6ZfuNTqbHE8')} />
                    </View>
                    <Text style={{ fontFamily: 'Roboto', fontWeight: '700', marginTop: 5, color: '#363636' }}>Avengers</Text>
                </View>
                <View style={{flexDirection: 'column', marginRight: 20}}>
                    <View style={styles.thumbnail}>
                        <Thumbnail url={`https://www.youtube.com/watch?v=6ZfuNTqbHE8`} iconStyle={styles.iconStyle} imageWidth={'100%'} imageHeight={130} onPress={() => play('6ZfuNTqbHE8')} />
                    </View>
                    <Text style={{ fontFamily: 'Roboto', fontWeight: '700', marginTop: 5, color: '#363636' }}>Avengers</Text>
                </View>
                <View style={{flexDirection: 'column', marginRight: 20}}>
                    <View style={styles.thumbnail}>
                        <Thumbnail url={`https://www.youtube.com/watch?v=6ZfuNTqbHE8`} iconStyle={styles.iconStyle} imageWidth={'100%'} imageHeight={130} onPress={() => play('6ZfuNTqbHE8')} />
                    </View>
                    <Text style={{ fontFamily: 'Roboto', fontWeight: '700', marginTop: 5, color: '#363636' }}>Avengers</Text>
                </View>
                <View style={{flexDirection: 'column', marginRight: 20}}>
                    <View style={styles.thumbnail}>
                        <Thumbnail url={`https://www.youtube.com/watch?v=6ZfuNTqbHE8`} iconStyle={styles.iconStyle} imageWidth={'100%'} imageHeight={130} onPress={() => play('6ZfuNTqbHE8')} />
                    </View>
                    <Text style={{ fontFamily: 'Roboto', fontWeight: '700', marginTop: 5, color: '#363636' }}>Avengers</Text>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    thumbnail: {
        borderRadius: 15,
        width: 240,
        overflow: 'hidden',
        backgroundColor: 'green',
        height: 130,
        marginTop: 15
    },
    iconStyle: {
        height: 25,
        width: 25
    }
});
