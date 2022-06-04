import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Popup from '../common/Popup';

function Youtube() {
	const [Vids, setVids] = useState([]);
	const [Open, setOpen] = useState(false);
	const [Index, setIndex] = useState(0);

	const key = 'AIzaSyC77Pd__ju0Wqx_Umc-IuW7Cn2mWi_HVsk';
	const playlist = 'PLHtvRFLN5v-W-izd7V4JH2L4-RTW0WRi3';
	const num = 8;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

	const handlePopup = (index) => {
		setOpen(true);
		setIndex(index);
	};

	useEffect(() => {
		axios.get(url).then((json) => {
			console.log(json.data.items);
			setVids(json.data.items);
		});
	}, []);

	return (
		<>
			<Layout name={'Youtube'}>
				{Vids.map((vid, idx) => {
					const tit = vid.snippet.title;
					const desc = vid.snippet.description;
					const date = vid.snippet.publishedAt;

					return (
						<article key={idx}>
							<h2>
								{tit.length > 20
									? tit.substr(0, 20) + '...'
									: tit}
							</h2>
							<div className='txt'>
								<p>
									{desc.length > 200
										? desc.substr(0, 200) + '...'
										: desc}
								</p>
								<span>{date.split('T')[0]}</span>
							</div>
							<div
								className='pic'
								onClick={() => handlePopup(idx)}>
								<img
									src={vid.snippet.thumbnails.standard.url}
									alt={vid.snippet.title}
								/>
							</div>
						</article>
					);
				})}
			</Layout>

			{Open && (
				//미션 - 썸네일 클릭시 해당 썸네일에 맞는 영상 모달창에 출력 (35분까지)
				<Popup setOpen={setOpen}>
					<iframe
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
						frameBorder='0'></iframe>
				</Popup>
			)}
		</>
	);
}

export default Youtube;
