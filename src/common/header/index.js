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
import {connect} from 'react-redux';

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
		focused : state.header.focused
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus() {
			const action = {
				type: 'search_focus'
			};
			dispatch(action);
		},
		handleInputBlur() {
			const action = {
				type: 'search_blur'
			};
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)