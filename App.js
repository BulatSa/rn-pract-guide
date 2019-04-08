import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Button} from 'react-native';

import PlaceList from "./src/components/place-list/place-list";
import PlaceInput from "./src/components/place-input/place-input";
import PlaceDetail from './src/components/place-detail/place-detail'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 26,
		backgroundColor: '#F5FCFF',
	}
});

export default class App extends Component {

	state = {
		places: [],
		selectedPlace: null
	};

	placeAddedHandler = (placeName) => {
		this.setState( (prevState) => {
			return {
				places: prevState.places.concat({
					key: Math.random(),
					name: placeName,
					image: {
						uri: 'https://live.staticflickr.com/7804/46838766334_2d05055ddd.jpg'
					}
				})
			}
		});
	};

	placeDeletedHandler = () => {
		this.setState( (prevState) => {
			return {
				places: prevState.places.filter((place) => {
					return place.key !== prevState.selectedPlace.key;
				}),
				selectedPlace: null
			};
		});
	};

	modalClosedHandler = () => {
		this.setState({
			selectedPlace: null
		});
	};

	placeSelectedHandler = (key) => {
		this.setState((prevState) => {
			return {
				selectedPlace: prevState.places.find((place) => {
					return place.key === key;
				})
			}
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<PlaceDetail
					selectedPlace={this.state.selectedPlace}
					onItemDeleted={this.placeDeletedHandler}
					onModalClosed={this.modalClosedHandler}
				/>
				<PlaceInput onPlaceAdded={this.placeAddedHandler}/>
				<PlaceList
					places={this.state.places}
					onItemSelected={this.placeSelectedHandler}
				/>
			</View>
		);
	}
}


