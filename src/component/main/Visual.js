import Anime from '../../asset/anim.js';
import { useRef } from 'react';

function Visual() {
	return (
		<figure id='visual' className='myScroll'>
			<article id='slider'>
				<ul className='panel'>
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
					<li className='on'></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

				<button className='prev'></button>
				<button className='next'></button>
			</article>
		</figure>
	);
}

export default Visual;
