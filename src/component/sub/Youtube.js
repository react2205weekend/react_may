import Layout from '../common/Layout';
import { useEffect, useState, useRef } from 'react';
import Popup from '../common/Popup';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Youtube() {
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

	const handlePopup = (index) => {
		setIndex(index);
		pop.current.open();
	};

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
