import { ADDFAV, REMOVEFAV } from '../constants';

const initialState = [];

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDFAV:
            return [...state, action.payload]
        case REMOVEFAV:
            let tempState = state.filter(val => val !== action.payload)
            return [...tempState ]
        default:
            return state;
    }
};

export default favoriteReducer;