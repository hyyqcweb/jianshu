import * as constants from './constants';
import axios from 'axios';

const changeHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	acticleList: result.acticleList,
	writerList: result.writerList
});

export const mouseEnter = () => ({
	type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE
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