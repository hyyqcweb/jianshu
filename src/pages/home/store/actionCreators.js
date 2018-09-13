import * as constants from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

const changeHomeList = (data) => ({
	type: constants.CHANGE_LIST,
	data: fromJS(data),
})

export const mouseEnter = () => ({
	type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE
});

export const getLists = () => {
	return (dispatch) => {
		axios.get('/api/homeWriter.json')
		.then(res => {
			dispatch(changeHomeList(res.data.users));
		}).catch(error => {
			console.log(error)
		});	
	}
}