import { constants } from './index';
import { fromJS } from 'immutable';

// immutable
const defaultState = fromJS({
	focused: false,
	list: []
})

// 没有immutable
// const defaultState = {
// 	focused: false
// }

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SEARCH_FOCUS:
			// return {focused: true} // 没有immutable
			
			// immutable set方法,会结合之前immutable对象的值
			// 和设置的值,返回一个全新的对象
			return state.set('focused', true);
		case constants.SEARCH_BLUR:
			// return {focused: false}
			return state.set('focused', false); 
		case constants.CHANGE_LIST:
			return state.set('list', action.data);
		default: 
			return state;
	}
}