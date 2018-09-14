import React from 'react'
import { 
	NavBarDefault,
	HeaderWrapper,
	Container,
	Logo, 
	Nav, 
	NavItem,
	SearchGroup, 
	NavSearch, 
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button
} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect} from 'react-redux';
import { actionCreators} from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link, BrowserRouter, Redirect } from 'react-router-dom';

class Header extends React.Component {

	getListArea() {
		const {focused, list, page, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage, totalPage} = this.props;
		const pageList = [];
		const newList = list.toJS();

		for(let i= ((page-1) * 10); i < page*10; i++) {
			pageList.push(
				<SearchInfoItem key={Math.random() *100}>{newList[i]}</SearchInfoItem>
			)
		}
		
		if(focused || mouseIn) {
			return (
				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.sponIcon)}>
						<i ref={(icon) => {this.sponIcon = icon}} className="iconfont spin">&#xe852;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		}else{
			return null
		}
	}

	handleRoute = () => {
		window.location.reload()
	}

	render() {
		const {focused, handleInputFocus, handleInputBlur, list, login, logout} = this.props;
		return (
			<NavBarDefault>
        		<HeaderWrapper>
	              <Container>
					<Logo/> 
					<Nav>
						<NavItem className='left active'>首页</NavItem>
						<NavItem className='left'>下载App</NavItem>
						{
							login ? <NavItem onClick={logout}  className='right'>退出</NavItem> : <BrowserRouter><Link to='/login'><NavItem onClick={this.handleRoute} className='right'>登陆</NavItem></Link></BrowserRouter>
						}
						<NavItem className='right'>
							<i className="iconfont zoom">&#xe636;</i>
						</NavItem>
						<SearchGroup>
							<CSSTransition
								in={focused}
								timeout={200}
								classNames="slide"
							>
								<NavSearch className={focused ? 'focused' : ''}  onFocus={() => handleInputFocus(list)} onBlur={handleInputBlur}></NavSearch>
							</CSSTransition>
							<i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
							{this.getListArea()}
						</SearchGroup>
					</Nav>
					<Addition>
						<BrowserRouter>
							<Link to='/write'>
								<Button className="writting" onClick={this.handleRoute}>
								<i className="iconfont">&#xe690;</i>
									写文章
								</Button>
							</Link>
						</BrowserRouter>
						<Button className="reg">注册</Button>
					</Addition>
				  </Container>
				</HeaderWrapper>
        	</NavBarDefault>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		// 等价于下面的代码 focused: state.getIn(['header','focused'])
		focused: state.get('header').get('focused'),  // 引入 redux-immutable
		list: state.getIn(['header','list']),
		page: state.getIn(['header','page']),
		totalPage: state.getIn(['header','totalPage']),
		mouseIn: state.getIn(['header','mouseIn']),
		login: state.getIn(['login','login'])
		// focused : state.header.get('focused') // 引入immutable
		// focused : state.header.focused // 没有引入immutable
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			// 简洁代码 
			// (list.size === 0) && dispatch(actionCreators.getList());
			if(list.size === 0) {
				dispatch(actionCreators.getList());
			}
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin) {
			// replace(/[^0-9]/ig,'') 过滤出0-9之间的数字, 对于非数字的一律 置空
			let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
			if(originAngle) {
				originAngle = parseInt(originAngle,10);
			}else{
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
			if(page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			}else{
				dispatch(actionCreators.changePage(1));
			}
		},
		logout() {
			dispatch(loginActionCreators.logout())
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)