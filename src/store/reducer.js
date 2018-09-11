import { combineReducers } from 'redux-immutable';
import { reducer as HeaderReducer } from '../common/header/store';

// combineReducers 数据拆分

export default combineReducers({
	header: HeaderReducer
});