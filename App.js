import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';

import PlaceList from "./src/components/place-list/place-list";
import PlaceInput from "./src/components/place-input/place-input";
import PlaceDetail from './src/components/place-detail/place-detail'
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 26,
		backgroundColor: '#F5FCFF',
	}
});

class App extends Component {



	placeAddedHandler = (placeName) => {
		this.props.onAddPlace(placeName);
	};

	placeDeletedHandler = () => {
		this.props.onDeletePlace();
	};

	modalClosedHandler = () => {
		this.props.onDeselectPlace();
	};

	placeSelectedHandler = (key) => {
		this.props.onSelectPlace(key);
	};

	render() {
		return (
			<View style={styles.container}>
				<PlaceDetail
					selectedPlace={this.props.selectedPlace}
					onItemDeleted={this.placeDeletedHandler}
					onModalClosed={this.modalClosedHandler}
				/>
				<PlaceInput onPlaceAdded={this.placeAddedHandler}/>
				<PlaceList
					places={this.props.places}
					onItemSelected={this.placeSelectedHandler}
				/>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		places: state.places.places,
		selectedPlace: state.places.selectedPlace
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAddPlace: (name) => dispatch(addPlace(name)),
		onDeletePlace: () => dispatch(deletePlace()),
		onSelectPlace: (key) => dispatch(selectPlace(key)),
		onDeselectPlace: () => dispatch(deselectPlace())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


