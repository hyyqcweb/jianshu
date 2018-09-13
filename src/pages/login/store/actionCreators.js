import axios from 'axios';


export const login = (account, password) => {
	return (dispatch) => {
		axios.get('/api/login?account=' + account + '&password=' + password).then(res => {
			console.log(res)
		}).catch(error => {
			console.log(error);
		})
	} 
}