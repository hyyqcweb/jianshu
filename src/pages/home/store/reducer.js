import { fromJS } from 'immutable';
import topicImg from '../../../statics/topic';

// immutable
const defaultState = fromJS({
	topicList: [
		{
			id: 1,
			title: '旅行·在路上',
			imgUrl: topicImg.TopicImg06
		},
		{
			id: 2,
			title: '摄影',
			imgUrl: topicImg.TopicImg02
		},
		{
			id: 3,
			title: '自然科普',
			imgUrl: topicImg.TopicImg03
		},
		{
			id: 4,
			title: '@IT·互联网',
			imgUrl: topicImg.TopicImg05
		},
		{
			id: 5,
			title: '故事',
			imgUrl: topicImg.TopicImg07
		},
		{
			id: 6,
			title: '简书电影',
			imgUrl: topicImg.TopicImg04
		},
		{
			id: 7,
			title: '手绘',
			imgUrl: topicImg.TopicImg01
		},
	]
});


export default (state = defaultState, action) => {
	switch(action.type) {
		default: 
			return state;
	}
}