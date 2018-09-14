import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends Component {
	render() {
		const { handleSubmit, login } = this.props;
		console.log(login)
		if(login) {
			return (
				<div>
					这是一个文章页面
				</div>
			)
		}else {
			return 	<Redirect to='/login' />
		}
		
	}
}

const mapState = (state) => ({
	login: state.getIn(['login','login'])
});


export default connect(mapState,null)(Login);