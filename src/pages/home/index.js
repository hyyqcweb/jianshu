import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import List from './components/List';
import logoPic from '../../statics/1.jpg';
import axios from 'axios';
import { connect } from 'react-redux';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state={}
	}
	componentDidMount() {
		axios.get('/api/home.json')
		.then((res) => {
			const result = res.data.data;
			const action = {
				type: 'change_home_data',
				topicList: result.topicList,
				acticleList: result.acticleList,
				writerList: result.writerList
			}
			this.props.changeHomeData(action);
		}).catch(error => {
			console.log(error)
		})
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

const mapDispatch = (dispatch) => ({
	changeHomeData(action) {
		dispatch(action);
	}
});
export default connect(null,mapDispatch)(Home); 