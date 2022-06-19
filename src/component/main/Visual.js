import Anime from '../../asset/anim.js';
import { useRef, useState } from 'react';

function Visual() {
	console.log('visual');
	const panel = useRef(null);

	const [Index, setIndex] = useState(0);
	const [EnableClick, setEnableClick] = useState(true);

	const init = () => {
		if (!EnableClick) return;
		const panel_li = panel.current.children;
		const len = panel_li.length;
		const currentEl = panel.current.querySelector('.on');
		const current_index = Array.from(panel_li).indexOf(currentEl);
		return [currentEl, current_index, len];
	};

	const showPrev = () => {
		const [currentEl, current_index, len] = init();
		let prev_index = null;
		current_index !== 0
			? (prev_index = current_index - 1)
			: (prev_index = len - 1);

		showSlide(currentEl, prev_index, -1);
	};

	const showNext = () => {
		const [currentEl, current_index, len] = init();
		let next_index = null;
		current_index !== len - 1
			? (next_index = current_index + 1)
			: (next_index = 0);

		showSlide(currentEl, next_index, 1);
	};

	const showNavi = (index) => {
		const [currentEl, current_index] = init();

		const target_index = index;

		if (target_index > current_index) showSlide(currentEl, target_index, 1);
		if (target_index < current_index) showSlide(currentEl, target_index, -1);
	};

	const showSlide = (el, index, direction) => {
		setEnableClick(false);
		const panel_li = panel.current.children;

		//기존 활성화 패널  왼쪽 밖으로 모션 이동
		new Anime(el, {
			prop: 'left',
			value: -direction * 100 + '%',
			duration: 500,
			callback: () => {
				el.classList.remove('on');
				el.style.diplay = 'none';
			},
		});

		panel_li[index].style.display = 'flex';
		panel_li[index].style.left = direction * 100 + '%';

		//앞으로 활성화될 패널 프레임 안쪽으로 모션 이동
		new Anime(panel_li[index], {
			prop: 'left',
			value: '0%',
			duration: 500,
			callback: () => {
				panel_li[index].classList.add('on');
				setEnableClick(true);
			},
		});

		setIndex(index);
	};

	return (
		<figure id='visual' className='myScroll'>
			<article id='slider'>
				<ul className='panel' ref={panel}>
					<li className='s1 on'>
						<span>1</span>
					</li>
					<li className='s2'>
						<span>2</span>
					</li>
					<li className='s3'>
						<span>3</span>
					</li>
					<li className='s4'>
						<span>4</span>
					</li>
					<li className='s5'>
						<span>5</span>
					</li>
				</ul>

				<ul className='navi'>
					{[0, 1, 2, 3, 4].map((num) => {
						let on = '';
						Index === num ? (on = 'on') : (on = '');
						return (
							<li key={num} className={on} onClick={() => showNavi(num)}></li>
						);
					})}
				</ul>

				<button className='prev' onClick={showPrev}></button>
				<button className='next' onClick={showNext}></button>
			</article>
		</figure>
	);
}

export default Visual;
