import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends Component {
	render() {
		return (
			<LoginWrapper>
				<LoginBox>
					<Input placeholder="请输入账号"></Input>
					<Input placeholder="请输入密码"></Input>
					<Button>登陸</Button>
				</LoginBox>
			</LoginWrapper>
		)
	}
}
export default connect(null,null)(Login);