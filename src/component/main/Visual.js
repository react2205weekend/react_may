import Anime from '../../asset/anim.js';
import { useRef } from 'react';

function Visual() {
	const box = useRef(null);
	const style = {
		width: 100,
		height: 100,
		backgroundColor: 'aqua',
		position: 'absolute',
		top: 100,
		left: 100,
	};
	return (
		<figure id='visual'>
			<div
				ref={box}
				className='box'
				style={style}
				onClick={(e) => {
					new Anime(box.current, {
						prop: 'left',
						value: 400,
						duration: 500,
						callback: () => {
							new Anime(box.current, {
								prop: 'top',
								value: 400,
								duration: 500,
							});
						},
					});
					/*			
					new Anime(e.target, {
						prop: 'opacity',
						value: 0,
						duration: 500,
					});
					*/
					/*
					new Anime(window, {
						prop: 'scroll',
						value: 2000,
						duration: 1500,
					});
					*/
				}}></div>
		</figure>
	);
}

export default Visual;
