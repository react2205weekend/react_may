import Layout from '../common/Layout';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Masonry from 'react-masonry-component';
import Popup from '../common/Popup';

function Gallery() {
	const Items = useSelector((store) => store.flickrReducer.flickr);
	const dispatch = useDispatch();
	const frame = useRef(null);
	const pop = useRef(null);
	const [EnableClick, setEnableClick] = useState(false);
	const [Index, setIndex] = useState(0);
	const [Opt, setOpt] = useState({ type: 'interest', count: 50 });
	const masonryOption = {
		transitionDuration: '0.5s',
	};

	useEffect(() => {
		frame.current.classList.add('on');
		dispatch({ type: 'FLICKR_START', Opt });
	}, [Opt]);

	return (
		<>
			<Layout name={'Gallery'}>
				<article ref={frame}>
					<Masonry elementType={'ul'} options={masonryOption}>
						{Items.map((item, idx) => {
							return (
								<li key={item.id}>
									<div className='inner'>
										<div
											className='pic'
											onClick={() => {
												setIndex(idx);
												pop.current.open();
											}}>
											<img
												src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
												alt={item.title}
											/>
										</div>
										<h2>{item.title}</h2>
										<div className='profile'>
											<img
												src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`}
												alt={item.owner}
												onError={(e) =>
													e.target.setAttribute(
														'src',
														'https://www.flickr.com/images/buddyicon.gif'
													)
												}
											/>
											<span>{item.owner}</span>
										</div>
									</div>
								</li>
							);
						})}
					</Masonry>
				</article>
			</Layout>

			<Popup ref={pop}>
				{Items.length !== 0 && (
					<img
						src={`https://live.staticflickr.com/${Items[Index].server}/${Items[Index].id}_${Items[Index].secret}_b.jpg`}
						alt={Items[Index].title}
					/>
				)}
			</Popup>
		</>
	);
}

export default Gallery;
