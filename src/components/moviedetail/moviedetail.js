import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
const { width } = Dimensions.get('screen');
const window = Dimensions.get("window");
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import ReadMore from 'react-native-read-more-text';
import Recommented from './recommented';
import * as Animatable from 'react-native-animatable';
import Reviews from './reviews';
import { connect } from 'react-redux';
import { addFavAction, removeFavAction } from '../../redux/actions/favorite.action';
const AnimatedIcon = Animatable.createAnimatableComponent(Icon);

const timeConvert = (n) => {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "min";
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

const moneyConverter = (money) => {

    // Nine Zeroes for Billions
    return Math.abs(Number(money)) >= 1.0e+9

        ? Math.abs(Number(money)) / 1.0e+9 + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(money)) >= 1.0e+6

            ? Math.abs(Number(money)) / 1.0e+6 + "M"
            // Three Zeroes for Thousands
            : Math.abs(Number(money)) >= 1.0e+3

                ? Math.abs(Number(money)) / 1.0e+3 + "K"

                : Math.abs(Number(money));
}

function MovieDetail({ details = {}, cast, navigation, reviews, Recommendation, state = [], dispatch }) {
    const [like, setlike] = useState(false);
    const [animateIcon, setanimateIcon] = useState({});
    const handleOnPressLike = () => {
        animateIcon.bounceIn();
        if (like) {
            dispatch(removeFavAction(details.id));
        } else {
            dispatch(addFavAction({
                id: details.id,
                title: details.title,
                poster_path: details.poster_path
            }));
        }
        setlike(prevState => (!prevState))
    }

    const handleSmallAnimatedIconRef = (ref) => {
        setanimateIcon(ref);
    }

    useEffect(() => {
        if (state.findIndex(mov => mov.id === details.id) !== -1) {
            setlike(true);
        }
    }, [details]);

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View style={styles.headerImage}>
                        <Image source={details.backdrop_path ? { uri: `https://image.tmdb.org/t/p/original${details.backdrop_path}` } : require('../../assets/image-not-available-big.jpg')} style={{ width, height: 200 }} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, paddingTop: 15 }}>
                        <TouchableOpacity >
                            <Icon name={'chevron-left'} size={25} color="white" solid onPress={() => navigation.goBack()} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={handleOnPressLike}
                            >
                                <AnimatedIcon
                                    ref={handleSmallAnimatedIconRef}
                                    name={'heart'}
                                    color={like ? '#e92f3c' : 'white'}
                                    size={26}
                                    style={{ marginRight: 20 }}
                                    solid={like}
                                />
                            </TouchableOpacity>
                            <Icon name={'ellipsis-v'} size={25} color="white" />
                        </View>
                    </View>
                </View>
                <View style={{ padding: 15, marginTop: 70 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={details.poster_path ? { uri: `https://image.tmdb.org/t/p/w500${details.poster_path}` } : require('../../assets/image-not-available.jpg')} style={{ height: 180, width: 120, borderRadius: 15, borderColor: 'white', borderWidth: .5 }} />
                        <View style={{ marginTop: 70, paddingLeft: 15 }}>
                            <Text style={{ fontFamily: 'Roboto', fontSize: 18, fontWeight: '700', color: '#363636', width: '65%' }}>{details.title}</Text>
                            <View style={{ flexDirection: 'row', marginTop: 6 }}>
                                <View style={{ flexDirection: 'row', marginRight: 25 }}>
                                    <Icon name={'star'} size={17} color="gold" style={{ marginRight: 10 }} solid />
                                    <Text style={{ color: 'gray', fontSize: 16 }}>{details.vote_average}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name={'clock'} size={20} color="#77b8b2" style={{ marginRight: 10 }} />
                                    <Text style={{ color: 'gray', fontSize: 16 }}>{timeConvert(details.runtime)}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                {details.genres && details.genres.map(genre => <Text id={genre.id} style={{ backgroundColor: '#e5e5e5', marginRight: 5, borderRadius: 6, paddingVertical: 2, alignItems: 'center', color: 'gray', paddingHorizontal: 7 }}>{genre.name}</Text>)}
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: '#363636', fontWeight: '700' }}>Release date: <Text style={{ color: 'gray', fontWeight: '400' }}>{moment(details.release_date).format('MMM DD, YYYY')}</Text></Text>
                        <Text style={{ color: '#363636', fontWeight: '700' }}>Budget: <Text style={{ color: '#77c8b2', fontWeight: '400' }}>${moneyConverter(details.budget)}</Text></Text>
                        <Text style={{ color: '#363636', fontWeight: '700' }}>Revenue: <Text style={{ color: '#77c8b2', fontWeight: '400' }}>${moneyConverter(details.revenue)}</Text></Text>
                        <Text style={{ color: '#363636', fontWeight: '700' }}>Production company: <Text style={{ color: 'gray', fontWeight: '400' }}>{details.production_companies && details.production_companies.map(val => val.name).join(', ')}</Text></Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: 15, color: '#363636' }}>STORYLINE</Text>
                        <ReadMore
                            numberOfLines={4}
                            renderTruncatedFooter={_renderTruncatedFooter}
                            renderRevealedFooter={_renderRevealedFooter}
                        >
                            <Text style={{ textAlign: 'justify', color: 'gray' }}>{details.overview}</Text>
                        </ReadMore>
                    </View>
                </View>
                {cast.length > 0 && <View style={{ marginTop: 20 }}>
                    <Text style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: 15, color: '#363636', paddingHorizontal: 15 }}>CAST</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {cast.map((val, index) => <View key={val.id + 'cast'} style={{ marginRight: 15, marginLeft: index === 0 ? 15 : 0, marginVertical: 10 }}>
                            <TouchableOpacity onPress={() => navigation.push('cast', { id: val.id })}>
                                <Image source={val.profile_path ? { uri: `https://image.tmdb.org/t/p/w500${val.profile_path}` } : require('../../assets/user.png')} style={{ height: 80, width: 80, borderRadius: 80 }} />
                                <Text style={{ width: 80, marginTop: 5, fontSize: 11 }}>{val.name}</Text>
                            </TouchableOpacity>
                        </View>)}
                    </ScrollView>
                </View>}
                <Recommented navigation={navigation} Recommendation={Recommendation} title="RECOMMENDED" />
                <View style={{ paddingHorizontal: 15 }}>
                    {reviews.length > 0 && <Reviews
                        reviews={reviews}
                        _renderTruncatedFooter={_renderTruncatedFooter}
                        _renderRevealedFooter={_renderRevealedFooter}
                        vote={details.vote_average}
                    />}
                </View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        state: state.fav
    }
};

export default connect(mapStateToProps)(MovieDetail);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    row: { flexDirection: 'row' },
    headerImage: {
        borderRadius: window.width,
        width: window.width * 2,
        height: window.width * 2,
        marginLeft: -(window.width / 2),
        position: "absolute",
        top: -window.width * 1.5,
        overflow: "hidden",
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})