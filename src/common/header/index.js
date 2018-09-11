import React, { Component } from 'react'
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

export default class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			focused: false
		}
	}

	handleInputFocus = () => {
		this.setState({
			focused: true
		})
	}

	handleInputBlur = () => {
		this.setState({
			focused: false
		})
	}

    render() {
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
								in={this.state.focused}
								timeout={200}
								classNames="slide"
							>
								<NavSearch className={this.state.focused ? 'focused' : ''}  onFocus={this.handleInputFocus} onBlur={this.handleInputBlur}></NavSearch>
							</CSSTransition>
							<i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
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