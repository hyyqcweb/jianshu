import { constants } from './index';
import { fromJS } from 'immutable';

// immutable
const defaultState = fromJS({
	focused: false, // input 聚焦和没聚焦
	mouseIn: false, // 移入移出
	list: [], 
	page: 1, // 为了实现10个一页
	totalPage: 1 //spin 动画效果,换一批(就是 切换页码)
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
			// merge 方法,等同下面
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			}) 
			//return state.set('list', action.data).set('totalPage',action.totalPage);
		case constants.MOUSE_ENTER:
			return state.set('mouseIn',true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn',false);
		case constants.CHANGE_PAGE:
			return state.set('page',action.page)
		default: 
			return state;
	}
}