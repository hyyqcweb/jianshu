import React, { Component } from 'react';
import { WriterWrapper, WriterTitle, WriterList } from '../style';
import { connect } from 'react-redux';
import { actionCreators} from '../store';

// 写作
class Writer extends Component {
    render() {
    	const { handleTest, writerList } = this.props;
        return (
			<WriterWrapper>
				<WriterTitle>
					<span className="author">推荐作者</span>
					<span className="barter" onClick={handleTest(writerList)}><i ref={(icon) => {this.sponIcon = icon}} className="iconfont spin">&#xe852;</i> 换一批</span>
				</WriterTitle>
				{
					writerList.map((item) => {
						let wordage = '';
						let count = '';
						
						// 判断 是否大于 1000
						if( (item.get('total_wordage') / 1000).toFixed(1) > 1 ) {
							wordage = (item.get('total_wordage') / 1000).toFixed(1) + 'k';
						}else {
							wordage = item.get('total_wordage');
						}

						if( (item.get('total_likes_count') / 1000).toFixed(1) > 1 ) {
							count = (item.get('total_likes_count') / 1000).toFixed(1) + 'k';
						}else {
							count = item.get('total_likes_count');
						}

						return <WriterList key={item.get('id')}>
							<img className="avatar" src={item.get('avatar_source')} alt=""/>
							<div className="info">
			            		<div className="title">{item.get('nickname')}</div>
								<div className="description">写了{wordage}字 · {count}喜欢</div>
			            	</div>
			            	<span className="attention"><i className="iconfont plus">&#xe611;</i> 关注</span>
						</WriterList>
					})
				}
			</WriterWrapper>
        )
    }
}
const mapStateToProps = (state) => ({
	writerList: state.getIn(['home','writerList']),
});
const mapDispatchToProps = (dispatch) => {
	return {
		handleTest(writerList) {
			if(writerList.size === 0) {
				dispatch(actionCreators.getLists());
			}
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Writer);