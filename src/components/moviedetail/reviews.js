import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import ReadMore from 'react-native-read-more-text';
const { width } = Dimensions.get('screen');

export default function Reviews({ reviews, _renderTruncatedFooter, _renderRevealedFooter, vote }) {
    return (
        <View>
            <View style={{ ...styles.row, justifyContent: 'space-between' }}>
                <View style={styles.row}>
                    <View style={{ marginRight: 25 }}>
                        <Text style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: 15, color: '#363636' }}>REVIEWS</Text>
                        <Text style={{ fontFamily: 'Roboto', fontSize: 13, color: 'gray' }}>324 reviews</Text>
                    </View>
                    <View style={{ ...styles.row, alignItems: 'center' }}>
                        <Icon name={'star'} size={15} color="gold" style={{ marginRight: 10 }} solid />
                        <Text style={{ fontFamily: 'Roboto', fontSize: 25, color: '#77c8b2' }}>{vote}<Text style={{ fontSize: 16 }}>/10</Text></Text>
                    </View>
                </View>
                <View style={{ ...styles.row, alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Roboto', fontSize: 15, color: '#77c8b2' }}>Show all</Text>
                </View>
            </View>
            <View style={{ marginBottom: 20 }}>
                {reviews.map((rev, i) => <View key={i + 'review'} style={{ ...styles.row, marginTop: 20 }}>
                    <Image source={{ uri: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg` }} style={{ height: 80, width: 80, borderRadius: 80, marginTop: 5 }}></Image>
                    <View style={{ marginLeft: 15, width: width - 125 }}>
                        <View style={{ ...styles.row, justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: 14, color: '#363636' }}>{rev.author}</Text>
                                <Text style={{ fontFamily: 'Roboto', fontSize: 12, color: 'gray' }}>12/07/2020</Text>
                            </View>
                            <View style={{ ...styles.row, alignItems: 'center' }}>
                                <Icon name={'star'} size={15} color="gold" style={{ marginRight: 10 }} solid />
                                <Text style={{ fontFamily: 'Roboto', fontSize: 15, color: '#77c8b2' }}>{Math.round(Math.random() * 10)}</Text>
                            </View>
                        </View>
                        <ReadMore
                            numberOfLines={2}
                            renderTruncatedFooter={_renderTruncatedFooter}
                            renderRevealedFooter={_renderRevealedFooter}
                        >
                            <Text style={{ marginTop: 3, color: 'gray' }}>{rev.content}</Text>
                        </ReadMore>
                    </View>
                </View>)}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    row: { flexDirection: 'row' }
});