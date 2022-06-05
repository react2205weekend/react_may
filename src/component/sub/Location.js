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
			title: '한강 달빛광장',
			latLng: new kakao.maps.LatLng(
				37.511428115136866,
				126.99762475590865
			),
			imgSrc: `${path}/img/marker2.png`,
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: '남산 서울타워',
			latLng: new kakao.maps.LatLng(
				37.55163472656687,
				126.98814003620416
			),
			imgSrc: `${path}/img/marker3.png`,
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
	];
	const [Info] = useState(info);
	const [Location, setLocation] = useState(null);
	const [Traffic, setTraffic] = useState(false);
	const [Index, setIndex] = useState(0);

	const container = useRef(null);
	//const btns = useRef(null);
	const options = {
		center: Info[Index].latLng,
		level: 3,
	};

	useEffect(() => {
		//지도 인스턴스가 추가될때마다 기존 map 프레임 안쪽의 내용일 일단은 제거하고 새로운 지도 생성
		container.current.innerHTML = '';
		const map_instance = new kakao.maps.Map(
			container.current,
			options
		);

		const markerPosition = Info[Index].latLng;
		const imageSrc = Info[Index].imgSrc;
		const imageSize = Info[Index].imgSize;
		const imageOption = Info[Index].imgPos;
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

		/*
		for (const btn of btns.current.children)
			btn.classList.remove('on');
		btns.current.children[Index].classList.add('on');
		*/

		const mapCenter = () => {
			console.log('함수호출');
			map_instance.setCenter(Info[Index].latLng);
		};

		//브라우저 리사이즈시 마커중앙 유지
		window.addEventListener('resize', mapCenter);

		//해당 컴포넌트 unmount시 윈도우에 등록된 함수 제거
		return () =>
			window.removeEventListener('resize', mapCenter);
	}, [Index]);

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

			<div className='btnSet'>
				<button onClick={() => setTraffic(!Traffic)}>
					{Traffic ? 'Traffic OFF' : 'Traffic ON'}
				</button>

				<ul>
					{Info.map((info, idx) => {
						let on = '';
						idx === Index ? (on = 'on') : (on = '');
						return (
							<li
								className={on}
								key={idx}
								onClick={() => setIndex(idx)}>
								{info.title}
							</li>
						);
					})}
				</ul>
			</div>
		</Layout>
	);
}

export default Location;
