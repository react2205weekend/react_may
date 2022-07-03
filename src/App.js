//common
import Header from './component/common/Header';
import Footer from './component/common/Footer';

//main
import Main from './component/main/Main';

//sub
import Department from './component/sub/Department';
import Community from './component/sub/Community';
import Gallery from './component/sub/Gallery';
import Youtube from './component/sub/Youtube';
import Location from './component/sub/Location';
import Join from './component/sub/Join';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setYoutube, setMembers } from './redux/action';
import './scss/style.scss';

function App() {
	const dispatch = useDispatch();

	const fetchMembers = async () => {
		const url = `${process.env.PUBLIC_URL}/DB/member.json`;
		await axios.get(url).then((json) => {
			dispatch(setMembers(json.data.members));
		});
	};

	const fetchYoutube = async () => {
		const key = 'AIzaSyC77Pd__ju0Wqx_Umc-IuW7Cn2mWi_HVsk';
		const playlist = 'PLHtvRFLN5v-W-izd7V4JH2L4-RTW0WRi3';
		const num = 8;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

		await axios.get(url).then((json) => {
			dispatch(setYoutube(json.data.items));
		});
	};

	useEffect(() => {
		fetchMembers();
		fetchYoutube();
	}, []);

	return (
		<>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Route path='/department' component={Department} />
			<Route path='/community' component={Community} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/location' component={Location} />
			<Route path='/join' component={Join} />

			<Footer />
		</>
	);
}
export default App;
