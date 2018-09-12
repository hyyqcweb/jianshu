import React, { Component } from 'react';
import { TopicWrapper, TopicItem, TopicTitle } from'../style';
import { connect } from 'react-redux';

// 专题
class Topic extends Component {
    render() {
    	const {topicList} = this.props;
        return (
            <TopicWrapper>
            {
            	topicList.map((item) => (
					<TopicItem key={item.get('id')}>
						<img className="topic-img" src={item.get('imgUrl')} alt=""/>
						{item.get('title')}
					</TopicItem>
            	))
            }
            <TopicTitle>更多热门专题 &gt;</TopicTitle>
			</TopicWrapper>
        )
    }
}
const mapStateTopProps = (state) => ({
	topicList: state.getIn(['home','topicList'])
});

// const mapDispatchToProps = 
export default connect(mapStateTopProps,null)(Topic);