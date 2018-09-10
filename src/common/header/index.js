import React, { Component } from 'react'
import { 
	NavBarDefault,
	HeaderWrapper,
	Container,
	Logo, 
	Nav, 
	NavItem, 
	NavSearch, 
	Addition,
	Button
} from './style'

export default class Header extends Component {
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
						<NavItem className='right'>Aa</NavItem>
						<NavSearch></NavSearch>
					</Nav>
					<Addition>
						<Button className="writting">写文章</Button>
						<Button className="reg">注册</Button>
					</Addition>
				  </Container>
				</HeaderWrapper>
        	</NavBarDefault>
    		
        )
    }
}