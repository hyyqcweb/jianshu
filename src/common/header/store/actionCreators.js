import * as constants from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
	type: constants.CHANGE_LIST,
	data: fromJS(data)
})

export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
}); 

export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
}); 

export const getList = () => {
	return (dispatch) => {
		axios.get('/api/headerList.json')
		.then(res => {
			dispatch(changeList(res.data.data));
		}).catch(error => {
			console.log(error)
		});	
	}
}