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
		//처음 App컴포넌트 구동시 일단 사용자계정의 데이터옵션을 saga로 액션객체에 담아 보냄
		//saga -> reducer -> store -> index를 거쳐 어떤 컴포넌트에서든 useSelectoer Flickr데이터 접근 가능
		dispatch({
			type: 'FLICKR_START',
			Opt: { type: 'user', count: 50, user: '164021883@N04' },
		});
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
