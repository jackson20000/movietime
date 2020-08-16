import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Modal, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImageViewer from 'react-native-image-zoom-viewer';
import ReadMore from 'react-native-read-more-text';
import moment from 'moment';
const { width } = Dimensions.get('screen');

export default function Cast({ navigation, details, photos, movies }) {
    const [photo, setphoto] = useState({ isModalOpened: false, currentImageIndex: 0 })
    const openModal = (index) => {
        setphoto({ isModalOpened: true, currentImageIndex: index })
    }

    const _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{ color: '#77c8b2' }} onPress={handlePress}>
                Read more
            </Text>
        );
    }

    const _renderRevealedFooter = (handlePress) => {
        return (
            <Text style={{ color: '#77c8b2' }} onPress={handlePress}>
                Show less
            </Text>
        );
    }

    return (
        <>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, paddingTop: 15, borderBottomColor: 'darkgray', borderWidth: .5, alignItems: 'center', backgroundColor: 'white', elevation: 5 }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Icon name={'chevron-left'} size={25} color="#363636" solid />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'Roboto', color: '#fb5558', fontSize: 26, fontWeight: '700', marginTop: -5, paddingVertical: 5 }}>movietime</Text>
                    <Icon name={'ellipsis-v'} size={25} color="#363636" />
                </View>
                <ScrollView>
                    <View style={{ flex: 1, backgroundColor: 'white' }}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 15, marginTop: 15 }}>
                            <View style={{ backgroundColor: 'white', elevation: 10, borderRadius: 140, overflow: 'hidden' }}>
                                <Image source={details.profile_path ? { uri: `https://image.tmdb.org/t/p/w500${details.profile_path}` } : require('../../assets/user.png')} style={{ height: 140, width: 140 }} />
                            </View>
                            <View>
                                <View style={{ paddingLeft: 15 }}>
                                    <Text style={{ fontFamily: 'Roboto', color: '#363636', fontSize: 16, fontWeight: '700' }}>{details.name}</Text>
                                    <Text style={{ fontFamily: 'Roboto', color: 'gray', fontSize: 12 }}>{details.known_for_department}</Text>
                                </View>
                                <View style={{ marginTop: 20, paddingLeft: 15 }}>
                                    <Text style={{ fontFamily: 'Roboto', fontWeight: '700' }} >Date of Birth: <Text style={{ color: 'gray', fontWeight: '400' }}>{moment(details.birthday).format('MMM DD, YYYY')}</Text></Text>
                                    <Text style={{ fontFamily: 'Roboto', fontWeight: '700' }} >Place of Birth: <Text style={{ color: 'gray', fontWeight: '400' }}>{details.place_of_birth}</Text></Text>
                                    <Text style={{ fontFamily: 'Roboto', fontWeight: '700' }} >Popularity: <Text style={{ color: 'gray', fontWeight: '400' }}>{details.popularity}</Text></Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 20, paddingHorizontal: 15 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                                <Text style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: 15, color: '#363636' }}>BIOGRAPHY</Text>
                            </View>
                            <ReadMore
                                numberOfLines={4}
                                renderTruncatedFooter={_renderTruncatedFooter}
                                renderRevealedFooter={_renderRevealedFooter}
                            >
                                <Text style={{ color: 'gray', fontFamily: 'Roboto' }}>{details.biography}</Text>
                            </ReadMore>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, marginBottom: 10 }}>
                                <Text style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: 15, color: '#363636' }}>PHOTO</Text>
                                <Text style={{ fontFamily: 'Roboto', fontSize: 15, color: '#77c8b2' }}>Show all</Text>
                            </View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {photos.map((pic, index, full) =>
                                    <TouchableOpacity onPress={() => { openModal(index) }} key={pic.file_path}>
                                        <View style={{ backgroundColor: 'white', elevation: 5, marginRight: index + 1 === full.length ? 15 : 7.5, marginLeft: index === 0 ? 15 : 7.5, marginVertical: 5, borderRadius: 8, overflow: 'hidden' }}>
                                            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${pic.file_path}` }} style={{ height: 180, width: 120 }} resizeMode={'contain'} />
                                        </View>
                                    </TouchableOpacity>)
                                }
                            </ScrollView>
                        </View>
                        <View style={{ paddingHorizontal: 15, marginBottom: 80, marginTop: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                                <Text style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: 15, color: '#363636' }}>ALL MOVIES</Text>
                                <Text style={{ fontFamily: 'Roboto', fontSize: 15, color: '#77c8b2' }}>Show all</Text>
                            </View>
                            {movies.map(val =>
                                <TouchableOpacity key={val.id+'mov'} onPress={() => navigation.push('moviedetails', { id: val.id })}>
                                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                                        <View style={{ backgroundColor: 'white', elevation: 5, borderRadius: 10, overflow: 'hidden' }}>
                                            <Image source={val.poster_path ? { uri: `https://image.tmdb.org/t/p/w500${val.poster_path}` } : require('../../assets/image-not-available.jpg')} style={{ height: 158, width: 105 }} resizeMode={'contain'} />
                                        </View>
                                        <View style={{ width: width - 135, paddingLeft: 20 }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: 15, color: '#363636', width: '75%' }}>{val.original_title}</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Icon name={'star'} size={15} color="gold" style={{ marginRight: 5, marginTop: 3 }} solid />
                                                    <Text style={{ fontFamily: 'Roboto', fontSize: 15, color: '#77c8b2' }}>{val.vote_average}</Text>
                                                </View>
                                            </View>
                                            <Text style={{ color: 'gray', fontSize: 13 }}>{val.character}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>)}
                        </View>
                    </View>
                </ScrollView>
            </View>
            <Modal presentationStyle={'overFullScreen'} visible={photo.isModalOpened} transparent={true} onRequestClose={() => setphoto({ isModalOpened: false, currentImageIndex: 0 })} >
                <ImageViewer onSwipeDown={() => setphoto({ isModalOpened: false, currentImageIndex: 0 })} enableSwipeDown={true} imageUrls={photos.map(val => { return { url: `https://image.tmdb.org/t/p/original${val.file_path}` } })} index={photo.currentImageIndex} />
            </Modal>
        </>
    )
}
