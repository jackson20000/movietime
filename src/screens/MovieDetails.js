import React, { useEffect, useState } from 'react';
import MovieDetail from '../components/moviedetail/moviedetail';
import { connect } from 'react-redux';
import { loaderAction } from '../redux/actions/loaderAction';

function MovieDetails({ route, navigation, dispatch }) {

    const movieId = route.params.id;
    const [details, setdetails] = useState({});
    const [cast, setcast] = useState([]);
    const [Recommendation, setRecommendation] = useState([]);
    const [reviews, setreviews] = useState([])

    useEffect(() => {
        dispatch(loaderAction(true));
        Promise.all([getMovieDetails(), getCast(), getRecommendation(), getReviews()]).then((values) => {
            setdetails(values[0]);
            setcast(values[1].cast.slice(0,10));
            setRecommendation(values[2].results.slice(0,5));
            setreviews(values[3].results);
            dispatch(loaderAction(false));
        });
    }, []);

    const getMovieDetails = () => {
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=f5edca19e3e608f507158f2624f12532&language=en-US`).then(val => val.json())
    }

    const getCast = () => {
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=f5edca19e3e608f507158f2624f12532&language=en-US`).then(val => val.json())
    }

    const getRecommendation = () => {
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=f5edca19e3e608f507158f2624f12532&language=en-US`).then(val => val.json())
    }

    const getReviews = () => {
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=f5edca19e3e608f507158f2624f12532&language=en-US`).then(val => val.json())
    }

    return (
        <MovieDetail
            details={details}
            cast={cast}
            navigation={navigation}
            Recommendation={Recommendation}
            reviews={reviews}
        />
    )
}
const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(MovieDetails);