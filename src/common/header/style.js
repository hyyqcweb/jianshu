import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
	height: 56px;
	line-height: 56px;
	border-top:1px solid #f0f0f0;
	border-bottom:1px solid #f0f0f0;
	ponsition:relative;
`

export const Logo = styled.a.attrs({
	href: '/'
})`
	width:100px;
	height:56px;
	display:block;
	ponsition:absolute;
	top:0;
	left:0;
	background:url(${logoPic});
	background-size:cover;
`

export const Nav = styled.div`
	width: 980px;
	margin: 0 auto;
	height: 100%;
	background: green;
	
`