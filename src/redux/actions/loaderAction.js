import { LOADER } from '../constants';

export const loaderAction = (bool) => {
    return {
        type: LOADER,
        payload: bool
    }
}