import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import { fetchFlickr, fetchMember, fetchYoutube } from './api';

//flickr saga
export function* callFlickr() {
	yield takeLatest('FLICKR_START', returnFlickr);
}
export function* returnFlickr(action) {
	try {
		const response = yield call(fetchFlickr, action.Opt);
		yield put({ type: 'FLICKR_SUCCESS', payload: response.data.photos.photo });
	} catch (err) {
		yield put({ type: 'FLICKR_ERROR', payload: err });
	}
}

//member saga
export function* callMember() {
	yield takeLatest('MEMBER_START', returnMember);
}
export function* returnMember() {
	try {
		const response = yield call(fetchMember);
		yield put({ type: 'MEMBER_SUCCESS', payload: response.data.members });
	} catch (err) {
		yield put({ type: 'MEMBER_ERROR', payload: err });
	}
}

//youtube saga
export function* callYoutube() {
	yield takeLatest('YOUTUBE_START', returnYoutube);
}
export function* returnYoutube() {
	try {
		const response = yield call(fetchYoutube);
		yield put({ type: 'YOUTUBE_SUCCESS', payload: response.data.items });
	} catch (err) {
		yield put({ type: 'YOUTUBE_ERROR', payload: err });
	}
}

export default function* rootSaga() {
	yield all([fork(callFlickr), fork(callMember), fork(callYoutube)]);
}
