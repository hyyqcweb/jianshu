import * as constants from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
	type: constants.CHANGE_LIST,
	data: fromJS(data),
})

export const mouseEnter = () => ({
	type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE
});

export const getList = () => {
	return (dispatch) => {
		axios.get('/api/homeWriter.json')
		.then(res => {
			dispatch(changeList(res.data.users));
		}).catch(error => {
			console.log(error)
		});	
	}
}