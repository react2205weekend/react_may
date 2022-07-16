import axios from 'axios';

export const fetchFlickr = async (opt) => {
	const key = '4612601b324a2fe5a1f5f7402bf8d87a';
	const method_interest = 'flickr.interestingness.getList';
	const method_search = 'flickr.photos.search';
	const method_user = 'flickr.people.getPhotos';
	let url = '';
	if (opt.type === 'interest')
		url = `https://www.flickr.com/services/rest/?method=${method_interest}&api_key=${key}&per_page=${opt.count}&format=json&nojsoncallback=1`;
	if (opt.type === 'search')
		url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${key}&per_page=${opt.count}&tags=${opt.tags}&format=json&nojsoncallback=1`;
	if (opt.type === 'user')
		url = `https://www.flickr.com/services/rest/?method=${method_user}&api_key=${key}&per_page=${opt.count}&user_id=${opt.user}&format=json&nojsoncallback=1`;

	return await axios.get(url);
};

export const fetchMember = async () => {
	const url = `${process.env.PUBLIC_URL}/DB/member.json`;
	return await axios.get(url);
};
