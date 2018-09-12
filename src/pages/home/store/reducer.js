import { fromJS } from 'immutable';
import TopicImg01 from '../../../statics/topic/topic01.jpg';
import TopicImg02 from '../../../statics/topic/topic02.jpg';

// immutable
const defaultState = fromJS({
	topicList: [
		{
			id: 1,
			title: '社会热点',
			imgUrl: TopicImg01
		},
		{
			id: 2,
			title: '摄影',
			imgUrl: TopicImg02
		}
	]
});


export default (state = defaultState, action) => {
	switch(action.type) {
		default: 
			return state;
	}
}