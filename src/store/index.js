import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose; // 适配google插件redux
const store = createStore(reducer,composeEnhancers(
	applyMiddleware(thunk) // 运用redux-thunk 中间件,来处理axios 异步操作
));

export default store;