import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Button} from 'react-native';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

export default class App extends Component {

	state = {
		placeName: '',
		places: []
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

		this.setState(prevState => {
			return {
				places: prevState.places.concat(prevState.placeName)
			};
		});
	};

	render() {

		const placesOutput = this.state.places.map((place, i) => (
			<Text key={i}>{place}</Text>
		));

		return (
			<View style={styles.container}>
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
				<View>
					{placesOutput}
				</View>
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
	},
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
