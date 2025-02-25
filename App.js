import { Provider } from 'react-redux';
import Router from './src/Router';
import { store } from './src/RTK/store';
import { ImageBackground } from 'react-native';
import styles from './src/Styles/styles';

export default function App() {
  const backgroundImage = require("./assets/2.jpg");

  return (
    <Provider store={store}>
      <ImageBackground
        source={backgroundImage}
        style={styles.background}
        resizeMode="cover"
      >
        <Router />
      </ImageBackground>
    </Provider>

  );

}
