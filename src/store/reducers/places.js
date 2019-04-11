import {ADD_PLACE, DELETE_PLACE } from '../actions/action-types';

const initialState = {
	places: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PLACE:
			return {
				...state,
				places: state.places.concat({
					key: Math.random(),
					name: action.placeName,
					image: {
						uri: 'https://live.staticflickr.com/7804/46838766334_2d05055ddd.jpg'
					}
				})
			};
		case DELETE_PLACE:
			return {
				...state,
				places: state.places.filter((place) => {
					return place.key !== action.placeKey;
				})
			};
		default:
			return state;
	}
};

export default reducer;