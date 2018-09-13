import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	acticleList: result.acticleList,
	writerList: result.writerList
});

const changeMoreList = (result, nextPage) => ({
	type: constants.ADD_HOME_LIST,
	list: fromJS(result),
	nextPage
})

export const mouseEnter = () => ({
	type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE
});

export const toggleTopShow = (show) => ({
	type: constants.TOGGLE,
	show
});

export const getLists = () => {
	return (dispatch) => {
		axios.get('/api/home.json')
		.then((res) => {
			const result = res.data.data;
			dispatch(changeHomeData(result));
		}).catch(error => {
			console.log(error);
		})
	}
}

export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page=' + page)
		.then((res) => {
			const result = res.data.data;
			dispatch(changeMoreList(result, page + 1));
		}).catch(error => {
			console.log(error);
		})
	}
}
