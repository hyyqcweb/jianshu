import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const NavBarDefault = styled.div`
	width: 100%;
	border-top:1px solid #f0f0f0;
	border-bottom:1px solid #f0f0f0;
`;

export const HeaderWrapper = styled.div`
	min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
    
`;

export const Container = styled.div`
    height: 56px;
	line-height: 56px;
	position: relative;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
	width:100px;
	height:56px;
	display:block;
	position:absolute;
	top:0;
	left:0;
	background:url(${logoPic});
	background-size:cover;
`;

export const Nav = styled.div`
	width: 980px;
	padding-right:70px;
	box-sizing: border-box;
	margin: 0 auto;
	height: 100%;
`;

export const NavItem = styled.div`
	line-height: 56px;
	margin: 0 15px;
	font-size: 17px;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`;

export const SearchGroup = styled.div`
	float: left;
	position:relative;
	.iconfont {
		position: absolute;
		right: 0px;
		bottom: 12px;
		width:30px;
		line-height:30px;
		text-align:center;
		border-radius:15px;
	}
`;

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px;
	margin-top:9px;
	margin-left:20px;
	padding: 0 20px;
	box-sizing: border-box;
	height: 38px;
	border: none;
	outline:none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	&::placeholder {
		color: #999;
	}
`;

export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`;

export const Button = styled.div`
	float: right;
    cursor: pointer;
	line-height: 38px;
	border-radius:19px;
	margin-top:9px;
	border:1px solid #ec6149;
	margin-right:20px;
	padding: 0 20px;
	font-size: 14px;
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`;