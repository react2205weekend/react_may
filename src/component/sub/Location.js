import Layout from '../common/Layout';
import { useEffect, useRef } from 'react';

function Location() {
	const { kakao } = window;
	const container = useRef(null);
	const options = {
		center: new kakao.maps.LatLng(33.450701, 126.570667),
		level: 3,
	};

	useEffect(() => {
		new kakao.maps.Map(container.current, options);
	}, []);

	return (
		<Layout name={'Location'}>
			<div id='map' ref={container}></div>
		</Layout>
	);
}

export default Location;
