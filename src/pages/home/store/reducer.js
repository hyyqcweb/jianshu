import { fromJS } from 'immutable';
import { constants } from './index';
import topicImg from '../../../statics/topic';

// immutable
const defaultState = fromJS({
	topicList: [],
	acticleList: [],
	writerList: [],
	mouseIn: false
});


export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.MOUSE_ENTER:
			return state.set('mouseIn',true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn',false);
		// case constants.CHANGE_LIST:
		// 	return state.set('writerList', action.data)
		case 'change_home_data':
			return state.merge({
				topicList: fromJS(action.topicList),
				acticleList: fromJS(action.acticleList),
				writerList: fromJS(action.writerList),
			})
		default: 
			return state;
	}
}