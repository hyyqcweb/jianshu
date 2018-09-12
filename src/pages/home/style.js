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
	width: 290px;
	float: right;
	padding-top: 30px;
	margin-left: 30px;
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
	margin: 0 0 8px;
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

export const ListMeta = styled.div`
	span{
		font-size: 12px;
	    font-weight: 400;
	    line-height: 20px;
	    cursor: pointer;
	    margin-right: 10px;
	    color: #b4b4b4;
	    &:hover {
	    	color: #787878;
	    }
	}
	.iconfont {
		font-size: 12px;
	}
`;

// 右上广告
export const RecommendWrapper = styled.div`
	margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
    cursor: pointer;
    li {
    	list-style-type: none;
    	img {
    		width: 100%;
		    min-height: 50px;
		    margin-bottom: 6px;
		    border-radius: 4px;
    	}
    }
`;
// qrcode download modal(tip)
export const QrcodeWrapper = styled.div`
    margin-bottom: 30px;
    padding: 10px 22px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    position:relative;
    cursor: pointer;
    .qrcode {
    	width: 60px;
	    height: 60px;
	    opacity: .85;
    }
    .info {
    	display: inline-block;
	    position: absolute;
	    left: 90px;
	    top: 22px;
	    .title {
		    font-size: 15px;
		    line-height: 20px;
		    color: #333;
	    }
	    .description {
    	    margin-top: 4px;
		    font-size: 13px;
		    color: #999;
	    }
    }
    .modal-qrcode {
    	position: absolute;
    	width: 150px;
    	height: 150px;
    	background: #fff;
	    border: 1px solid #dcdcdc;
	    border-radius: 10px;
        box-shadow: 0 6px 20px #dcdcdc;
        top: -185px;
	    left: 60px;
	    padding: 10px;
    	img {
    		width: 100%;
        	transition: all 2s;
    	}
    }
`;