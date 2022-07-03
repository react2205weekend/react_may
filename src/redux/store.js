import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from '@redux-aga/core';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
