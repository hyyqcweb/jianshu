## 简书

+ 技术栈: react全家桶+antd+styled-components...

> 特点: 
	更细致的**代码拆分**,给你一种大项目的感觉(如鱼得水)


### 划重点(header布局)
```<Logo href='/'/> 普通写法```

``` export const Logo = styled.a.attrs({href: '/'})`  高端写法(逼格高)```

### 代码优化(header布局)

```
	// 优化前
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
	// 优化后
	handleInputFocus() {
		dispatch(actionCreators.searchFocus());
	},
	handleInputBlur() {
		dispatch(actionCreators.searchBlur());
	}
```