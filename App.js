import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/auth/auth';
import SharePlaceScreen from './src/screens/share-place/share-place';
import FindPlaceScreen from './src/screens/find-place/find-place';

// Register Screens
Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen);
Navigation.registerComponent('awesome-places.SharePlaceScreen', () => SharePlaceScreen);
Navigation.registerComponent('awesome-places.FindPlaceScreen', () => FindPlaceScreen);

// Start a App
Navigation.startSingleScreenApp({
	screen: {
		screen: 'awesome-places.AuthScreen',
		title: 'Login'
	}
});