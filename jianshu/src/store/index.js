import {createStore,applyMiddleware,compose} from "redux";
import reducer from "./reducer"
import createSagaMiddleware from 'redux-saga';
import mySaga from "../common/header/store/saga";
import homeSaga from '../pages/home/store/saga'
import detailSaga from '../pages/detail/store/saga'
import loginSaga from "../pages/login/store/saga"

const sagaMiddleware = createSagaMiddleware();


const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


const enhancer = composeEnhancers(
        applyMiddleware(sagaMiddleware)
);
const store = createStore(reducer,enhancer);

sagaMiddleware.run(mySaga);
sagaMiddleware.run(homeSaga);
sagaMiddleware.run(detailSaga);
sagaMiddleware.run(loginSaga);

export default store;