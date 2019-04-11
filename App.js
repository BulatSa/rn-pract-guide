import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/auth/auth';
import SharePlaceScreen from './src/screens/share-place/share-place';
import FindPlaceScreen from './src/screens/find-place/find-place';
import SideDrawer from './src/screens/side-drawer/side-drawer';
import PlaceDetailScreen from './src/screens/place-detail/place-detail'
import configureStore from './src/store/configure-store';

const store = configureStore();

// Register Screens
Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen, store, Provider);
Navigation.registerComponent('awesome-places.SharePlaceScreen', () => SharePlaceScreen, store, Provider);
Navigation.registerComponent('awesome-places.FindPlaceScreen', () => FindPlaceScreen, store, Provider);
Navigation.registerComponent('awesome-places.PlaceDetailScreen', ()=> PlaceDetailScreen, store, Provider);

Navigation.registerComponent('awesome-places.SideDrawer', () => SideDrawer);

// Start a App
Navigation.startSingleScreenApp({
	screen: {
		screen: 'awesome-places.AuthScreen',
		title: 'Login'
	}
});