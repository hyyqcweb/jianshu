import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;
	overflow: hidden;
`;

export const HomeLeft = styled.div`
	width: 625px;
	margin-left: 15px;
	padding-top: 30px;
	float: left;
	.banner-img {
		width:625px;
		height:270px;
	}
`;

export const HomeRight = styled.div`
	width: 240px;
	float: right;
	padding-top: 30px;
`;

// 专题

export const TopicWrapper = styled.div`
	padding: 20px 0 10px 0;
	overflow: hidden;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.span`
	float: left;
	background: #f7f7f7;
	height: 32px;
	line-height: 32px;
	font-size: 14px;
	margin-left: 18px;
	border: 1px solid #dcdcdc;
	color: #000;
	border-radius: 4px;
	padding-right: 10px;
	margin-bottom: 18px;
	.topic-img {
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const TopicTitle = styled.a.attrs({
	href : '/'
})`
	float: left;
	display: inline-block;
    margin-top: 10px;
    font-size: 14px;
    color: #787878;
    margin-left: 10px;
    text-decoration: none;
    cursor: pointer;
`;

// 列表

export const ListItem = styled.div`
	padding: 20px 0;
	overflow:hidden;
	border-bottom: 1px solid #dcdcdc;
	.list-pic {
		float: right;
		width: 125px;
		height: 100px;
		border-radius: 10px;
	}
`;

export const ListInfo = styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;