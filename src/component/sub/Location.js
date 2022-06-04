import Layout from '../common/Layout';
import { useEffect, useRef, useState } from 'react';

function Location() {
	const { kakao } = window;
	const path = process.env.PUBLIC_URL;
	const info = [
		{
			title: '삼성동 코엑스',
			latLng: new kakao.maps.LatLng(
				37.5127099887378,
				127.06069983235905
			),
			imgSrc: `${path}/img/marker1.png`,
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: '한강',
			latLng: new kakao.maps.LatLng(37.511507, 126.997067),
			imgSrc: `${path}/img/marker2.png`,
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: '남산',
			latLng: new kakao.maps.LatLng(37.551776, 126.988169),
			imgSrc: `${path}/img/marker3.png`,
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
	];
	const [Info] = useState(info);
	const [Location, setLocation] = useState(null);
	const [Traffic, setTraffic] = useState(false);

	const container = useRef(null);
	const options = {
		center: Info[0].latLng,
		level: 3,
	};

	useEffect(() => {
		const map_instance = new kakao.maps.Map(
			container.current,
			options
		);

		const markerPosition = Info[0].latLng;

		const imageSrc = Info[0].imgSrc;
		const imageSize = Info[0].imgSize;
		const imageOption = Info[0].imgPost;
		const markerImage = new kakao.maps.MarkerImage(
			imageSrc,
			imageSize,
			imageOption
		);

		const marker = new kakao.maps.Marker({
			position: markerPosition,
			image: markerImage,
		});

		//마커 인스턴스로부터 setMap함수 호출 (인수로 지도 인스턴스 전달)
		marker.setMap(map_instance);
		setLocation(map_instance);
	}, []);

	useEffect(() => {
		if (Location) {
			Traffic
				? Location.addOverlayMapTypeId(
						kakao.maps.MapTypeId.TRAFFIC
				  )
				: Location.removeOverlayMapTypeId(
						kakao.maps.MapTypeId.TRAFFIC
				  );
		}
	}, [Traffic]);

	return (
		<Layout name={'Location'}>
			<div id='map' ref={container}></div>

			<button onClick={() => setTraffic(!Traffic)}>
				{Traffic ? 'Traffic OFF' : 'Traffic ON'}
			</button>
		</Layout>
	);
}

export default Location;
