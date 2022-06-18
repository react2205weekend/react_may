import Header from '../common/Header';
import News from './News';
import Pics from './Pics';
import Vids from './Vids';
import Visual from './Visual';
import Btns from './Btns';
import Anime from '../../asset/anim.js';

import { useRef, useEffect, useState } from 'react';

function Main() {
	const main = useRef(null);
	const pos = useRef([]);
	const [Index, setIndex] = useState(0);

	const getPos = () => {
		pos.current = [];
		const secs = main.current.querySelectorAll('.myScroll');

		for (const sec of secs) pos.current.push(sec.offsetTop);

		//window.scroll(0, pos.current[Index]);
	};

	useEffect(() => {
		getPos();

		window.addEventListener('resize', getPos);
		return () => window.removeEventListener('resize', getPos);
	}, []);

	useEffect(() => {
		new Anime(window, {
			prop: 'scroll',
			value: pos.current[Index],
			duration: 500,
		});

		console.log(pos.current[Index]);
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
