import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import HomeComp from '../components/home/home';
import { loaderAction } from '../redux/actions/loaderAction';

function HomeScreen({ state, navigation, dispatch }) {
    const [upcoming, setupcoming] = useState([]);
    const [popular, setpopular] = useState([]);
    const [newmovie, setnewmovie] = useState([]);
    const [slider, setslider] = useState([]);
    const [ytrailers, setytrailers] = useState([]);

    useEffect(() => {
        dispatch(loaderAction(true));
        Promise.all([getUpcomingMovies(), getNewMovies(), getPopularMovies()]).then((values) => {
            setupcoming(values[0].results.slice(0,5));
            setnewmovie(values[1].results.slice(0,5));
            setpopular(values[2].results.slice(0,5));
        });
    }, []);

    useEffect(() => {
        setslider(newmovie.slice(0, 5).map(url=>url.backdrop_path));
    }, [newmovie]);

    useEffect(() => {
        getVideoDetails(upcoming.map(m=>m.id));
    }, [upcoming])

    const getUpcomingMovies = () => {
        return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=f5edca19e3e608f507158f2624f12532&language=en-US&page=1`).then(val => val.json())
    }

    const getNewMovies = () => {
        return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=f5edca19e3e608f507158f2624f12532&language=en-US&page=1`).then(val => val.json())
    }

    const getPopularMovies = () => {
        return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f5edca19e3e608f507158f2624f12532&language=en-US&page=1`).then(val => val.json())
    }

    const getVideoDetails = async (mov_ids) => {
        let ytubekey = [];
        await mov_ids.map(async (mid, id)=>{
            await fetch(`https://api.themoviedb.org/3/movie/${mid}/videos?api_key=f5edca19e3e608f507158f2624f12532&language=en-US`).then(val => val.json()).then(res=>{
                ytubekey.push({key: res.results[0]?.key, name: res.results[0]?.name});
            });
            if(id === 4){
                dispatch(loaderAction(false));
                setytrailers(ytubekey);
            }
        });
    }

    return (
        <HomeComp
            upcoming={upcoming}
            popular={popular}
            newmovie={newmovie}
            slider={slider}
            navigation={navigation}
            ytrailers={ytrailers}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(HomeScreen);