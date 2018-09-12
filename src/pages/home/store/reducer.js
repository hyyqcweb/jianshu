import { fromJS } from 'immutable';
import { constants } from './index';
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
	],
	acticleList: [
		{
			id: 1,
			title: '把握好人际交往的尺度，内心想不快乐都难',
			desc: '我们终其一生，都在寻找人际交往的那个“尺度”、“界限”到底在哪? 为什么你好心帮了别人，反而让别人觉得很尴尬，好心办成了坏事? 为什么有的人只是...',
			imgUrl: 'https://upload-images.jianshu.io/upload_images/6693515-8154b2372b08eca9?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
		},
		{
			id: 2,
			title: '把握好人际交往的尺度，内心想不快乐都难',
			desc: '我们终其一生，都在寻找人际交往的那个“尺度”、“界限”到底在哪? 为什么你好心帮了别人，反而让别人觉得很尴尬，好心办成了坏事? 为什么有的人只是...',
			imgUrl: 'https://upload-images.jianshu.io/upload_images/6693515-8154b2372b08eca9?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
		}
	],
	writerList: [],
	mouseIn: false
});


export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.MOUSE_ENTER:
			return state.set('mouseIn',true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn',false);
		case constants.CHANGE_LIST:
			return state.set('writerList', action.data)
		default: 
			return state;
	}
}