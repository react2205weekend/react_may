import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Vids() {
	const { youtube } = useSelector((store) => store.youtubeReducer);
	const cursor = useRef(null);
	const mouseMove = (e) => {
		cursor.current.style.left = e.clientX + 'px';
		cursor.current.style.top = e.clientY + 'px';
	};

	useEffect(() => {
		window.addEventListener('mousemove', mouseMove);
		return () => window.removeEventListener('mousemove', mouseMove);
	}, []);

	return (
		<section id='vids' className='myScroll'>
			<Swiper
				navigation={true}
				pagination={{ clickable: true }}
				modules={[Navigation, Pagination]}
				loop={true}
				spaceBetween={50}
				slidesPerView={3}
				centeredSlides={true}
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					1180: {
						slidesPerView: 3,
						spaceBetween: 50,
					},
				}}>
				{youtube.map((vid, idx) => {
					if (idx > 5) return;
					return (
						<SwiperSlide key={vid.id}>
							<div
								className='inner'
								onMouseEnter={() =>
									(cursor.current.style =
										'transform: translate(-50%, -50%) scale(3) ')
								}
								onMouseLeave={() =>
									(cursor.current.style =
										'transform: translate(-50%, -50%) scale(1)  ')
								}>
								<div className='pic'>
									<img
										src={vid.snippet.thumbnails.standard.url}
										alt={vid.snippet.title}
									/>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<div className='cursor' ref={cursor}></div>
		</section>
	);
}

export default Vids;
