import Layout from '../common/Layout';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Popup from '../common/Popup';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setYoutube } from '../../redux/action';

function Youtube() {
	const dispatch = useDispatch();
	const Vids = useSelector((store) => store.youtubeReducer.youtube);
	const pop = useRef(null);

	const [Index, setIndex] = useState(0);

	const history = useHistory();

	useEffect(() => {
		const backEvt = () => {
			console.log('back');
		};

		const funcBack = history.listen(({ action }) => {
			console.log(action);
			if (action === 'POP') backEvt();
		});

		return funcBack;
	}, [history]);

	const fetchYoutube = async () => {
		const key = 'AIzaSyC77Pd__ju0Wqx_Umc-IuW7Cn2mWi_HVsk';
		const playlist = 'PLHtvRFLN5v-W-izd7V4JH2L4-RTW0WRi3';
		const num = 8;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

		await axios.get(url).then((json) => {
			dispatch(setYoutube(json.data.items));
			// {type: 'SET_YOUTUBE', payload: json.data.items}
		});
	};

	const handlePopup = (index) => {
		setIndex(index);
		pop.current.open();
	};

	useEffect(fetchYoutube, []);

	return (
		<>
			<Layout name={'Youtube'}>
				{Vids.map((vid, idx) => {
					const tit = vid.snippet.title;
					const desc = vid.snippet.description;
					const date = vid.snippet.publishedAt;

					return (
						<article key={idx}>
							<h2>{tit.length > 20 ? tit.substr(0, 20) + '...' : tit}</h2>
							<div className='txt'>
								<p>{desc.length > 200 ? desc.substr(0, 200) + '...' : desc}</p>
								<span>{date.split('T')[0]}</span>
							</div>
							<div className='pic' onClick={() => handlePopup(idx)}>
								<img
									src={vid.snippet.thumbnails.standard.url}
									alt={vid.snippet.title}
								/>
							</div>
						</article>
					);
				})}
			</Layout>

			<Popup ref={pop}>
				{Vids.length !== 0 && (
					<iframe
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
				)}
			</Popup>
		</>
	);
}

export default Youtube;
