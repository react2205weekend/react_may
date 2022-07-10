//미들웨어 모듈 import
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
//saga 미들웨어 모듈 import
import createSagaMiddleware from '@redux-saga/core';
//미들웨어 적용할 saga파일 import
import rootSaga from './saga';

//sagaMiddlewar함수 활성화
const sagaMiddleware = createSagaMiddleware();
//store생성시 applyMiddleware로 활성화된 sagaMiddleware적용
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

//store에 적용된 sagaMiddlewar를 통해서 rootSaga기능 활성화
sagaMiddleware.run(rootSaga);

export default store;
