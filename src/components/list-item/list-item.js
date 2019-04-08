import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = (props) => (
	<TouchableOpacity onPress={props.onItemPressed}>
		<View style={styles.listItem}>
			<Image
				source={props.placeImage}
				style={styles.placeImage}
				resizeMode="cover"
			/>
			<Text>{props.placeName}</Text>
		</View>
	</TouchableOpacity>

);

const styles = StyleSheet.create({
	listItem: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 5,
		padding: 10,
		backgroundColor: '#eee'
	},
	placeImage: {
		marginRight: 8,
		width: 30,
		height: 30
	}
});

export default ListItem;