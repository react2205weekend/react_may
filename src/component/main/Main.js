import Header from '../common/Header';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';
import Visual from './Visual';
import Btns from './Btns';

import { useRef, useEffect, useState } from 'react';

function Main() {
	const main = useRef(null);
	const pos = useRef([]);
	const [Index, setIndex] = useState(0);

	const getPos = () => {
		pos.current = [];
		const secs = main.current.querySelectorAll('.myScroll');

		for (const sec of secs) pos.current.push(sec.offsetTop);
		console.log(pos.current);
	};

	useEffect(() => {
		getPos();

		window.addEventListener('resize', getPos);
		return () => window.removeEventListener('resize', getPos);
	}, []);

	useEffect(() => {
		console.log(Index);
	}, [Index]);

	return (
		<main ref={main}>
			<Header type={'main'} />
			<Visual />
			<News />
			<Pics />
			<Vids />
			<Btns setIndex={setIndex} />
		</main>
	);
}

export default Main;
