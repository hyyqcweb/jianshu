import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<LoginWrapper>
				<LoginBox>
					<Input placeholder="请输入账号" innerRef={(input) => {this.account = input}}/>
					<Input type="password" placeholder="请输入密码" innerRef={(input) => {this.password = input}}/>
					<Button onClick={() => {handleSubmit(this.account, this.password)}}>登录</Button>
				</LoginBox>
			</LoginWrapper>
		)
	}
}
const mapDispatch = (dispatch) => {
	return {
		handleSubmit(account, password) {
			dispatch(actionCreators.login(account.value, password.value))
		}
	}
}
export default connect(null,mapDispatch)(Login);