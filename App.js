import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/auth/auth';

// Register Screens
Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen);

// Start a App
Navigation.startSingleScreenApp({
	screen: {
		screen: 'awesome-places.AuthScreen',
		title: 'Login'
	}
});