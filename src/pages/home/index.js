import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import List from './components/List';
import logoPic from '../../statics/1.jpg';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state={}
	}
	componentDidMount() {
		// 减少 业务逻辑 移到下面去
		// axios.get('/api/home.json')
		// .then((res) => {
		// 	const result = res.data.data;
		// 	const action = {
		// 		type: 'change_home_data',
		// 		topicList: result.topicList,
		// 		acticleList: result.acticleList,
		// 		writerList: result.writerList
		// 	}
		// 	this.props.changeHomeData();
		// }).catch(error => {
		// 	console.log(error)
		// })
		this.props.changeHomeData();
	}

	render() {
		return (
			<div>
				<HomeWrapper>
					<HomeLeft>
						<img className='banner-img' src={logoPic} alt=""/>
						<Topic/>
						<List/>
					</HomeLeft>
					<HomeRight>
						<Recommend/>
						<Writer/>
					</HomeRight>
				</HomeWrapper>
			</div>
		)
	}
}

const mapDispatch = (dispatch) => {
	// 业务逻辑移到 thunk 中间件中去
	return {
		changeHomeData() {
			dispatch(actionCreators.getLists())
		}
	}
};

export default connect(null,mapDispatch)(Home); 
