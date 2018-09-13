import { fromJS } from 'immutable';
import {constants } from './index';

const defaultState = fromJS({
	title: '「福利向」Python妹子图爬虫',
	content: '<img src="https://upload-images.jianshu.io/upload_images/3810775-c85d043e58fe8900.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/635/format/webp" alt=""/><p>具体的信息懒得一个个去打了。。。反正需要的时候查一查，网络编程程序猿吗。。。知道是什么用就OK了 。。</p><p>具体的信息懒得一个个去打了。。。反正需要的时候查一查，网络编程程序猿吗。。。知道是什么用就OK了 。。</p><p>具体的信息懒得一个个去打了。。。反正需要的时候查一查，网络编程程序猿吗。。。知道是什么用就OK了 。。</p><p>具体的信息懒得一个个去打了。。。反正需要的时候查一查，网络编程程序猿吗。。。知道是什么用就OK了 。。</p>'
});

export default (state = defaultState, action) => {
	switch(action.type) {
		default: 
			return state;
	}
}