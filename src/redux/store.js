import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import loginReducer from "./reducers/loginReducer";
import favoriteReducer from "./reducers/favoriteReducer";
import loaderReducer from "./reducers/loaderReducer";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel1
}

const rootReducer = combineReducers(
    {
        login: loginReducer,
        fav: favoriteReducer,
        loader: loaderReducer
    }
);

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);