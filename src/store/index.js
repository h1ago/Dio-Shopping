import { createStore, compose, applyMiddleware } from 'redux';
import  createSaga  from 'redux-saga';
import rootSaga from "./sagas";
import rootReducer from './reducers';

const sagaMiddleware = createSaga();

const store = createStore(
    rootReducer, 
    compose(
        applyMiddleware( sagaMiddleware )
    )
);

sagaMiddleware.run(rootSaga);

export default store;