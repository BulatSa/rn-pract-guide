import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Button} from 'react-native';
import ListItem from './src/components/list-item/list-item';
import PlaceList from "./src/components/place-list/place-list";
import PlaceInput from "./src/components/place-input/place-input";

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

export default class App extends Component {

	state = {
		places: []
	};

	placeAddedHandler = (placeName) => {
		this.setState(prevState => {
			return {
				places: prevState.places.concat(placeName)
			}
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<PlaceInput onPlaceAdded={this.placeAddedHandler}/>
				<PlaceList places={this.state.places}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 26,
		backgroundColor: '#F5FCFF',
	}
});
