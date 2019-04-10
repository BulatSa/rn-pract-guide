import React from 'react';
import {Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const PlaceDetail = (props) => {
	let modalContent = null;

	const styles = StyleSheet.create({
		modalContainer: {
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

	if (props.selectedPlace) {
		modalContent = (
			<View>
				<Image
					source={props.selectedPlace.image}
					style={styles.placeImage}
				/>
				<Text style={styles.placeName}>{props.selectedPlace.name}</Text>
			</View>
		);
	}

	return (
		<Modal
			onRequestClose={props.onModalClosed}
			visible={props.selectedPlace !== null}
			animationType="slide">
			<View style={styles.modalContainer}>
				{modalContent}
				<View style={styles.deleteButton}>
					<TouchableOpacity onPress={props.onItemDeleted}>
						<View>
							<Icon
								name="ios-trash"
								color='red'
								size={30}
							/>
						</View>
					</TouchableOpacity>
					<Button
						title="Close"
						onPress={props.onModalClosed}
					/>
				</View>
			</View>
		</Modal>
	);


};

export default PlaceDetail;