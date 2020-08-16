import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import AppNavigator from './src/navigations/AppNavigator';
import { store, persistor } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import Loader from './src/shared/loader/loader';

const App: () => React$Node = () => {

  useEffect(() => {
    // SplashScreen.hide();
  }, [])

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
          <Loader />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
