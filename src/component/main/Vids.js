import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Vids() {
	return (
		<section id='vids' className='myScroll'>
			<Swiper
				navigation={true}
				pagination={{ clickable: true }}
				modules={[Navigation, Pagination]}
				loop={true}
				spaceBetween={50}
				slidesPerView={3}
				centeredSlides={true}>
				<SwiperSlide>
					<div className='inner'>1</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='inner'>2</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='inner'>3</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='inner'>4</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='inner'>5</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='inner'>6</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Vids;
