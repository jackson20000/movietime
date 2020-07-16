import { LOGIN, LOGOUT } from '../constants';

const initialState = {
    isLoggedin: false,
    token: ''
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                ...action.payload.data
            }
        case LOGOUT:
            return { ...initialState }
        default:
            return state;
    }
};

export default loginReducer;