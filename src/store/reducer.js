import { combineReducers } from 'redux-immutable';
import { reducer as HeaderReducer } from '../common/header/store';
import { reducer as HomeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';

// combineReducers 数据拆分

export default combineReducers({
    header: HeaderReducer,
    home: HomeReducer,
    detail: detailReducer,
    login: loginReducer
});