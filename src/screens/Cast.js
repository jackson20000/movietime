import React, { useEffect, useState } from 'react';
import Cast from '../components/cast/cast';
import { connect } from 'react-redux';
import { loaderAction } from '../redux/actions/loaderAction';

function CastScreen({ route, navigation, dispatch }) {

    const cast_id = route.params.id;
    const [details, setdetails] = useState({});
    const [photos, setphotos] = useState([]);
    const [movies, setmovies] = useState([])

    useEffect(() => {
        dispatch(loaderAction(true));
        Promise.all([getDetails(), getPhotoes(), getMovies()]).then((values) => {
            setdetails(values[0]);
            setphotos(values[1].profiles.slice(0,6));
            setmovies(values[2].cast.slice(0,10));
            dispatch(loaderAction(false));
        });
    }, []);

    const getDetails = () => {
        return fetch(`https://api.themoviedb.org/3/person/${cast_id}?api_key=f5edca19e3e608f507158f2624f12532&language=en-US`).then(val => val.json())
    }

    const getPhotoes = () => {
        return fetch(`https://api.themoviedb.org/3/person/${cast_id}/images?api_key=f5edca19e3e608f507158f2624f12532&language=en-US&page=1`).then(val => val.json())
    }

    const getMovies = () => {
        return fetch(`https://api.themoviedb.org/3/person/${cast_id}/movie_credits?api_key=f5edca19e3e608f507158f2624f12532&language=en-US&page=1`).then(val => val.json())
    }

    return (
        <Cast
            details={details}
            photos={photos}
            movies={movies}
            navigation={navigation}
        />
    )
}

export default connect()(CastScreen);