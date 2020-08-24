import React, { useEffect, useState } from 'react';
import List from '../components/movielist/list';

export default function MovieList({ route, navigation }) {

    const Pagetype = route.params.type;
    const [loading, setloading] = useState(false);
    const [movielist, setmovielist] = useState([]);
    const [currentpage, setcurrentpage] = useState(1);
    const [pagecount, setpagecount] = useState(1);

    const getMovieList = (pagenumber) => {
        let url;
        if (Pagetype === 'popular') {
            url = `https://api.themoviedb.org/3/movie/popular?api_key=f5edca19e3e608f507158f2624f12532&language=en-US&page=${pagenumber}`;
        } else if (Pagetype === 'new') {
            url = `https://api.themoviedb.org/3/movie/now_playing?api_key=f5edca19e3e608f507158f2624f12532&language=en-US&page=${pagenumber}`;
        } else if (Pagetype === 'upcoming') {
            url = `https://api.themoviedb.org/3/movie/upcoming?api_key=f5edca19e3e608f507158f2624f12532&language=en-US&page=${pagenumber}`;
        }
        return fetch(url).then(val => val.json());
    }

    useEffect(() => {
        setloading(true);
        if (currentpage <= pagecount) {
            getMovieList(currentpage).then(res => {
                setloading(false);
                // console.log(res);
                setpagecount(res.total_pages);
                setmovielist(preval => [...preval, ...res.results.filter(r => !r.adult)]);
            }).catch(() => setloading(false));
        }
    }, [currentpage]);

    return (
        <List loading={loading} navigation={navigation} list={movielist} setcurrentpage={setcurrentpage} pagetype={Pagetype} />
    );
}