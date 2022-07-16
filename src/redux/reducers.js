import { combineReducers } from 'redux';

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
		case 'SET_YOUTUBE':
			return { ...state, youtube: action.payload };
		default:
			return state;
	}
};

const flickrReducer = (state = { flickr: [] }, action) => {
	switch (action.type) {
		case 'FLICKR_START':
			return { ...state };

		case 'FLICKR_SUCCESS':
			return { ...state, flickr: action.payload };

		case 'FlICKR_ERROR':
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
