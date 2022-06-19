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
				<SwiperSlide>1</SwiperSlide>
				<SwiperSlide>2</SwiperSlide>
				<SwiperSlide>3</SwiperSlide>
				<SwiperSlide>4</SwiperSlide>
				<SwiperSlide>5</SwiperSlide>
				<SwiperSlide>6</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Vids;
