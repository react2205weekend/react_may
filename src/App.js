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
import * as types from './redux/actionType';
import './scss/style.scss';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: types.YOUTUBE.start });
		dispatch({ type: types.MEMBER.start });
		dispatch({
			type: types.FLICKR.start,
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
