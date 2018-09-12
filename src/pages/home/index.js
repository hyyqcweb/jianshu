import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import List from './components/List';
import logoPic from '../../statics/1.jpg';

class Home extends Component {
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
export default Home; 