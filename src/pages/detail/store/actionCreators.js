import axios from 'axios';
import { constants } from './index';

const changeDetail = (title, content) => ({
	type: constants.CHANGE_DETAIL,
	title,
	content
})

export const getDetail = () => {
	return (disptach) => {
		axios.get('/api/detail.json')
		.then(res => {
			const result = res.data.data;
			disptach(changeDetail(result.title, result.content))
		}).catch(error => {
			console.log(error);
		})
	}
}