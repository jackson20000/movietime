import React from 'react'
import { connect } from 'react-redux';
import FavComponent from '../components/favourite/fav.component';

function Fav({navigation, state}) {
    return (
        <FavComponent navigation={navigation} state={state} />
    );
}
const mapStateToProps = (state) => {
    return {
        state: state.fav
    }
}

export default connect(mapStateToProps)(Fav);