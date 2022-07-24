import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFlickr = createAsyncThunk(
	'flickr/requestFlickr',
	async (opt) => {
		const key = '4612601b324a2fe5a1f5f7402bf8d87a';
		const method_interest = 'flickr.interestingness.getList';
		const method_search = 'flickr.photos.search';
		const method_user = 'flickr.people.getPhotos';
		const count = 10;

		let url = '';
		if (opt.type === 'interest')
			url = `https://www.flickr.com/services/rest/?method=${method_interest}&api_key=${key}&per_page=${count}&format=json&nojsoncallback=1`;
		if (opt.type === 'search')
			url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${key}&per_page=${count}&tags=${opt.tags}&format=json&nojsoncallback=1`;
		if (opt.type === 'user')
			url = `https://www.flickr.com/services/rest/?method=${method_user}&api_key=${key}&per_page=${count}&user_id=${opt.user}&format=json&nojsoncallback=1`;

		const response = await axios.get(url);
		return response.data.photos.photo;
	}
);

//reducer
const flickrSlice = createSlice({
	name: 'flickr',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchFlickr.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchFlickr.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[fetchFlickr.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

export default flickrSlice.reducer;
