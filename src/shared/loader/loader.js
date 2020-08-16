import React from 'react';
import { connect } from 'react-redux';
import { View, Dimensions } from 'react-native';
import Bars from './bars/Bars';
function Loader({ loader }) {
    var { height, width } = Dimensions.get('window');

    return (
        <>
            {loader && <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'rgba(0, 0, 0,.8)', height: height + 100, width, position: 'absolute', }}>
                <Bars size={18} color="white" />
            </View>}
        </>
    )
}

const mapStateToProps = (state) => {
    return state.loader
}

export default connect(mapStateToProps)(Loader);