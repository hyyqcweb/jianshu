import { fromJS } from 'immutable';
import { constants } from './index';

// immutable
const defaultState = fromJS({
	topicList: [],
	acticleList: [],
	writerList: [],
	acticlePage: 1,
	mouseIn: false
});


export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.MOUSE_ENTER:
			return state.set('mouseIn',true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn',false);
		case constants.CHANGE_HOME_DATA:
			return state.merge({
				topicList: fromJS(action.topicList),
				acticleList: fromJS(action.acticleList),
				writerList: fromJS(action.writerList),
			})
		case constants.ADD_HOME_LIST:
			return state.merge({
				acticleList: state.get('acticleList').concat(action.list),
				acticlePage: action.nextPage
			})
		default: 
			return state;
	}
}