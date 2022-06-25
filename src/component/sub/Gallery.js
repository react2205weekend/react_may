import axios from 'axios';
import Layout from '../common/Layout';
import { useEffect, useState, useRef } from 'react';

function Gallery() {
	const key = '4612601b324a2fe5a1f5f7402bf8d87a';
	const method_interest = 'flickr.interestingness.getList';
	const method_search = 'flickr.photos.search';
	const num = 50;
	const url_interest = `https://www.flickr.com/services/rest/?method=${method_interest}&api_key=${key}&per_page=${num}&format=json&nojsoncallback=1`;
	const url_search = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${key}&per_page=${num}&tags=ocean&format=json&nojsoncallback=1`;
	const frame = useRef(null);
	const [Items, setItems] = useState([]);

	const getFlickr = async (url) => {
		await axios.get(url).then((json) => {
			console.log(json.data.photos.photo);
			setItems(json.data.photos.photo);
		});
		frame.current.classList.add('on');
	};

	useEffect(() => getFlickr(url_search), []);

	return (
		<Layout name={'Gallery'}>
			<button>Interest Gallery</button>
			<button>Search Gallery</button>
			<ul ref={frame}>
				{Items.map((item) => {
					return (
						<li key={item.id}>
							<div className='inner'>
								<div className='pic'>
									<img
										src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
										alt={item.title}
									/>
								</div>
								<h2>{item.title}</h2>
							</div>
						</li>
					);
				})}
			</ul>
		</Layout>
	);
}

export default Gallery;
