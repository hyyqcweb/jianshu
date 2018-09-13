import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
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
		// 	this.props.changeHomeData(action);
		// }).catch(error => {
		// 	console.log(error)
		// })
		this.props.changeHomeData();
		this.bindEvents();
	}

	componetWillUnmount() {
		// 组件销毁时,去除事件绑定
		window.removeEventListener('scroll',this.props.changeScrollTopShow)
	}

	bindEvents() {
		window.addEventListener('scroll',this.props.changeScrollTopShow)
	}

	handleScrollTop = () => {
		window.scrollTo(0,0)
	}

	render() {
		const { showScroll } = this.props;
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
					{showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : ""}
					
				</HomeWrapper>
			</div>
		)
	}
}

const mapState = (state) => ({
	showScroll : state.getIn(['home','showScroll'])
});

const mapDispatch = (dispatch) => {
	// 业务逻辑移到 thunk 中间件中去
	// return {
	// 		changeHomeData(action){
	// 			dispatch(action);
	// 		}
	// }
	return {
		changeHomeData() {
			dispatch(actionCreators.getLists())
		},
		changeScrollTopShow(e) {
			if(document.documentElement.scrollTop > 400) {
				dispatch(actionCreators.toggleTopShow(true))
			}else{
				dispatch(actionCreators.toggleTopShow(false))
			}
		}
	}
};

export default connect(mapState,mapDispatch)(Home); 
