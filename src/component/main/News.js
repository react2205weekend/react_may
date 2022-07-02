import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function News() {
	const { members } = useSelector((store) => store.memberReducer);
	const getLocalData = () => {
		const dummyPosts = [
			{ title: 'Hello5', content: 'Here comes description in detail.' },
			{ title: 'Hello4', content: 'Here comes description in detail.' },
			{ title: 'Hello3', content: 'Here comes description in detail.' },
			{ title: 'Hello2', content: 'Here comes description in detail.' },
			{ title: 'Hello1', content: 'Here comes description in detail.' },
		];

		const data = localStorage.getItem('post');

		if (data) {
			return JSON.parse(data);
		} else {
			return dummyPosts;
		}
	};
	const [Posts] = useState(getLocalData());

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, []);

	return (
		<section id='news' className='myScroll'>
			<ul>
				{members.map((member, idx) => {
					if (idx < 2) {
						return (
							<li key={member.name}>
								<div className='pic'>
									<img
										src={`${process.env.PUBLIC_URL}/img/${member.pic}`}
										alt={member.name}
									/>
								</div>
							</li>
						);
					}
				})}
			</ul>
			{Posts.map((post, idx) => {
				if (idx < 4) {
					return (
						<article key={idx}>
							<h2>{post.title}</h2>
							<p>{post.content}</p>
						</article>
					);
				}
			})}
		</section>
	);
}

export default News;
