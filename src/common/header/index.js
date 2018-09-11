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
	Addition,
	Button
} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect} from 'react-redux';
import { actionCreators} from './store';

const Header = ({focused, handleInputFocus, handleInputBlur}) => {
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
const mapStateToProps = (state) => {
	return {
		// 等价于下面的代码 focused: state.getIn(['header','focused'])
		focused: state.get('header').get('focused')  // 引入 redux-immutable
		// focused : state.header.get('focused') // 引入immutable
		// focused : state.header.focused // 没有引入immutable
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)