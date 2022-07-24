import Layout from '../common/Layout';
import { useSelector } from 'react-redux';

const path = process.env.PUBLIC_URL;

function Department() {
	const members = useSelector((store) => store.members.data);

	return (
		<Layout name={'Department'}>
			<div className='wrap'>
				{members.map((member, idx) => {
					return (
						<article key={idx}>
							<div className='inner'>
								<div className='pic'>
									<img src={`${path}/img/${member.pic}`} alt={member.name} />
								</div>
								<h2>{member.name}</h2>
								<p>{member.position}</p>
							</div>
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Department;
