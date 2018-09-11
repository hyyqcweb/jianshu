import { combineReducers } from 'redux';
import HeaderReducer from '../common/header/store/reducer';

// combineReducers 数据拆分

export default combineReducers({
	header: HeaderReducer
})