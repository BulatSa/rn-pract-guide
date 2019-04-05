import React, { Component } from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

class PlaceInput extends Component {

	state = {
		placeName: ''
	};

	placeNameChangedHandler = (val) => {
		this.setState({
			placeName: val
		});
	};

	placeSubmitHandler = () => {
		if (this.state.placeName.trim() === '') {
			return;
		}

		this.props.onPlaceAdded(this.state.placeName);
	};

	render() {
		return (
			<View style={styles.inputContiner}>
				<TextInput
					style={styles.placeInput}
					placeholder={'Awesome placeholder'}
					value={this.state.placeName}
					onChangeText={this.placeNameChangedHandler}
				/>
				<Button
					style={styles.placeButton}
					title='Add'
					onPress={this.placeSubmitHandler}
				/>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	inputContiner: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	placeInput: {
		width: '70%',
		borderWidth: 1,
		borderColor: '#000'
	},
	placeButton: {
		width: '30%'
	}
});

export default PlaceInput;