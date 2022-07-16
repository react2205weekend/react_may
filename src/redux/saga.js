import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import { fetchFlickr, fetchMember, fetchYoutube } from './api';
import * as types from './actionType';

//flickr saga
export function* callFlickr() {
	yield takeLatest(types.FLICKR.start, returnFlickr);
}
export function* returnFlickr(action) {
	try {
		const response = yield call(fetchFlickr, action.Opt);
		yield put({
			type: types.FLICKR.success,
			payload: response.data.photos.photo,
		});
	} catch (err) {
		yield put({ type: types.FLICKR.err, payload: err });
	}
}

//member saga
export function* callMember() {
	yield takeLatest(types.MEMBER.start, returnMember);
}
export function* returnMember() {
	try {
		const response = yield call(fetchMember);
		yield put({ type: types.MEMBER.success, payload: response.data.members });
	} catch (err) {
		yield put({ type: types.MEMBER.err, payload: err });
	}
}

//youtube saga
export function* callYoutube() {
	yield takeLatest(types.YOUTUBE.start, returnYoutube);
}
export function* returnYoutube() {
	try {
		const response = yield call(fetchYoutube);
		yield put({ type: types.YOUTUBE.success, payload: response.data.items });
	} catch (err) {
		yield put({ type: types.YOUTUBE.err, payload: err });
	}
}

export default function* rootSaga() {
	yield all([fork(callFlickr), fork(callMember), fork(callYoutube)]);
}
