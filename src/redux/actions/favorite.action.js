import { ADDFAV, REMOVEFAV } from '../constants';

export const addFavAction = (id) => {
    return {
        type: ADDFAV,
        payload: id
    }
}


export const removeFavAction = (id) => {
    return {
        type: REMOVEFAV,
        payload: id
    }
}
