import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import HomeComp from '../components/home/home';
import { loaderAction } from '../redux/actions/loaderAction';

function HomeScreen({ state, navigation, dispatch }) {
    const [upcoming, setupcoming] = useState([]);
    const [popular, setpopular] = useState([]);
    const [newmovie, setnewmovie] = useState([]);
    const [slider, setslider] = useState([]);

    useEffect(() => {
        dispatch(loaderAction(true));
        Promise.all([getUpcomingMovies(), getNewMovies(), getPopularMovies()]).then((values) => {
            setupcoming(values[0].results.slice(0,5));
            setnewmovie(values[1].results.slice(0,5));
            setpopular(values[2].results.slice(0,5));
            dispatch(loaderAction(false));
        });
    }, []);

    useEffect(() => {
        setslider(newmovie.slice(0, 5).map(url=>url.backdrop_path));
    }, [newmovie]);

    const getUpcomingMovies = () => {
        return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=f5edca19e3e608f507158f2624f12532&language=en-US&page=1`).then(val => val.json())
    }

    const getNewMovies = () => {
        return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=f5edca19e3e608f507158f2624f12532&language=en-US&page=1`).then(val => val.json())
    }

    const getPopularMovies = () => {
        return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f5edca19e3e608f507158f2624f12532&language=en-US&page=1`).then(val => val.json())
    }

    return (
        <HomeComp
            upcoming={upcoming}
            popular={popular}
            newmovie={newmovie}
            slider={slider}
            navigation={navigation}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(HomeScreen);