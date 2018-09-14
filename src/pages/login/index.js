import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

class Login extends Component {
	render() {
		const { handleSubmit, login } = this.props;
		if(!login) {
			return (
				<LoginWrapper>
					<LoginBox>
						<Input placeholder="请输入账号" innerRef={(input) => {this.account = input}}/>
						<Input type="password" placeholder="请输入密码" innerRef={(input) => {this.password = input}}/>
						<Button onClick={() => {handleSubmit(this.account, this.password)}}>登录</Button>
					</LoginBox>
				</LoginWrapper>
			)
		}else {
			return 	<Redirect to='/' />
		}
		
	}
}

const mapState = (state) => ({
	login: state.getIn(['login','login'])
});

const mapDispatch = (dispatch) => {
	return {
		handleSubmit(account, password) {
			console.log(account.value);
			console.log(password.value);
			dispatch(actionCreators.login(account.value, password.value))
		}
	}
};

export default connect(mapState,mapDispatch)(Login);