import React, { useState } from 'react';
import SearchComponent from '../components/search/search.component';

export default function Search({ navigation }) {

    const [loading, setloading] = useState(false);
    const [movielist, setmovielist] = useState([]);
    const [currentpage, setcurrentpage] = useState(1);
    const [pagecount, setpagecount] = useState(1);
    const [searchtext, setsearchtext] = useState('');

    const getMovieList = (pagenumber, search) => {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=f5edca19e3e608f507158f2624f12532&language=en-US&query=${search}&page=${pagenumber}&include_adult=false`).then(val => val.json());
    };

    React.useEffect(() => {
        setmovielist([]);
    },[searchtext]);

    React.useEffect(() => {
        setloading(true);
        if (currentpage <= pagecount && searchtext !== '') {
            getMovieList(currentpage, searchtext).then(res => {
                setloading(false);
                setpagecount(res.total_pages);
                setmovielist(preval => [...preval, ...res.results.filter(r => !r.adult)]);
            }).catch(() => setloading(false));
        }
    }, [currentpage, searchtext]);

    return (
        <SearchComponent
            setcurrentpage={setcurrentpage}
            list={movielist}
            searchtext={searchtext}
            setsearchtext={setsearchtext}
            navigation={navigation}
            loading={loading}
        />
    )
}
