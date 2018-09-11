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
	Button,

} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect} from 'react-redux';
import { actionCreators} from './store';

class Header extends React.Component {

	getListArea() {
		if(this.props.focused) {
			return (
				<SearchInfo>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch>换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{
							this.props.list.map((item) => {
								return <SearchInfoItem key={item}>{item}</SearchInfoItem>
							})
						}
					</SearchInfoList>
				</SearchInfo>
			)
		}else{
			return null
		}
	}

	render() {
		const {focused, handleInputFocus, handleInputBlur} = this.props;
		return (
			<NavBarDefault>
        		<HeaderWrapper>
	              <Container>
					<Logo/> 
					<Nav>
						<NavItem className='left active'>首页</NavItem>
						<NavItem className='left'>下载App</NavItem>
						<NavItem className='right'>登陆</NavItem>
						<NavItem className='right'>
							<i className="iconfont">&#xe636;</i>
						</NavItem>
						<SearchGroup>
							<CSSTransition
								in={focused}
								timeout={200}
								classNames="slide"
							>
								<NavSearch className={focused ? 'focused' : ''}  onFocus={handleInputFocus} onBlur={handleInputBlur}></NavSearch>
							</CSSTransition>
							<i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
							{this.getListArea()}
						</SearchGroup>
					</Nav>
					<Addition>
						<Button className="writting">
						<i className="iconfont">&#xe690;</i>
							写文章
						</Button>
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
		list: state.getIn(['header','list'])
		// focused : state.header.get('focused') // 引入immutable
		// focused : state.header.focused // 没有引入immutable
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)