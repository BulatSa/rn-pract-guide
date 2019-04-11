import React, {Component} from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index'

import Icon from 'react-native-vector-icons/Ionicons';

class PlaceDetail extends Component {

	placeDeleteHandler = () => {
		this.props.onDeletePlace(this.props.selectedPlace.key);
		this.props.navigator.pop();
	};

	render() {

		return (
			<View style={styles.container}>
				<View>
					<Image
						source={this.props.selectedPlace.image}
						style={styles.placeImage}
					/>
					<Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
				</View>
				<View style={styles.deleteButton}>
					<TouchableOpacity onPress={this.placeDeleteHandler}>
						<View>
							<Icon
								name="ios-trash"
								color='red'
								size={30}
							/>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		margin: 20
	},
	placeImage: {
		width: '100%',
		height: 200
	},
	placeName: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 28
	},
	deleteButton: {
		alignItems: 'center',
		marginBottom: 5
	}
});

const mapDispatchToProps = (dispatch) => {
	return {
		onDeletePlace: (key) => dispatch(deletePlace(key))
	};
};

export default connect(null, mapDispatchToProps)(PlaceDetail);