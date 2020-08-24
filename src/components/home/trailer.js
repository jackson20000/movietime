import React from 'react';
import { YouTubeStandaloneAndroid } from 'react-native-youtube';
import { Thumbnail } from 'react-native-thumbnail-video';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Trailer({ title, ytrailers }) {
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
                {/* <Text style={{ fontFamily: 'Roboto', fontSize: 15, color: '#77c8b2' }}>Show all</Text> */}
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {ytrailers.filter(r => r.key).map((yt, i) => <View style={{ flexDirection: 'column', marginRight: 15, marginLeft: i === 0 ? 15 : 0 }}>
                    <View style={styles.thumbnail}>
                        <Thumbnail url={`https://www.youtube.com/watch?v=${yt.key}`} iconStyle={styles.iconStyle} imageWidth={'100%'} imageHeight={130} onPress={() => play(yt.key)} />
                    </View>
                    <Text style={{ fontFamily: 'Roboto', fontWeight: '700', marginTop: 5, color: '#363636', width: 240 }}>{yt.name}</Text>
                </View>)}
            </ScrollView>
        </>
    );
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
