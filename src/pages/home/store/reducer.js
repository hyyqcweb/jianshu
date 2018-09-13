import { fromJS } from 'immutable';
import { constants } from './index';

// immutable
const defaultState = fromJS({
	topicList: [],
	acticleList: [],
	writerList: [],
	acticlePage: 1,
	mouseIn: false,
	showScroll: false
});

// 代码抽取提炼
const changeHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		acticleList: fromJS(action.acticleList),
		writerList: fromJS(action.writerList),
	})
}

const addHomeList = (state, action) => {
	return state.merge({
		acticleList: state.get('acticleList').concat(action.list),
		acticlePage: action.nextPage
	})
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.MOUSE_ENTER:
			return state.set('mouseIn', true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case constants.CHANGE_HOME_DATA:
			return changeHomeData(state, action);
		case constants.ADD_HOME_LIST:
			return addHomeList(state, action);
		case constants.TOGGLE:
			return state.set('showScroll', action.show)
		default: 
			return state;
	}
}