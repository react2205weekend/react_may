import { combineReducers } from 'redux';
import * as types from './actionType';

const memberReducer = (state = { members: [] }, action) => {
	switch (action.type) {
		case 'MEMBER_START':
			return { ...state };
		case 'MEMBER_SUCCESS':
			return { ...state, members: action.payload };
		case 'MEMBER_ERROR':
			return { ...state, members: action.payload };

		default:
			return state;
	}
};

const youtubeReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		case types.YOUTUBE.start:
			return { ...state };
		case types.YOUTUBE.success:
			return { ...state, youtube: action.payload };
		case types.YOUTUBE.err:
			return { ...state, youtube: action.payload };

		default:
			return state;
	}
};

const flickrReducer = (state = { flickr: [] }, action) => {
	switch (action.type) {
		case types.FLICKR.start:
			return { ...state };

		case types.FLICKR.success:
			return { ...state, flickr: action.payload };

		case types.FLICKR.err:
			return { ...state, error: action.payload };

		default:
			return state;
	}
};

const reducers = combineReducers({
	memberReducer,
	youtubeReducer,
	flickrReducer,
});

export default reducers;
