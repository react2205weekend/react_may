import Layout from '../common/Layout';
import { useEffect, useRef, useState } from 'react';

function Location() {
	const [Location, setLocation] = useState(null);
	const [Traffic, setTraffic] = useState(false);
	//window전역객체에서 kakao라는 이름의 객체를 비구조화 할당으로 직접 변수에 전달
	const { kakao } = window;
	const path = process.env.PUBLIC_URL;
	const container = useRef(null);
	const options = {
		center: new kakao.maps.LatLng(
			37.5127099887378,
			127.06069983235905
		),
		level: 3,
	};

	useEffect(() => {
		const map_instance = new kakao.maps.Map(
			container.current,
			options
		);

		//마커가 출력될 위치 인스턴스 생성
		const markerPosition = new kakao.maps.LatLng(
			37.5127099887378,
			127.06069983235905
		);

		//마커이미지 인스턴스 생성
		const imageSrc = `${path}/img/marker1.png`;
		const imageSize = new kakao.maps.Size(232, 99);
		const imageOption = {
			offset: new kakao.maps.Point(116, 99),
		};
		const markerImage = new kakao.maps.MarkerImage(
			imageSrc,
			imageSize,
			imageOption
		);

		//위치 인스턴스를 인수로 받아서 마커 인스턴스 생성
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
