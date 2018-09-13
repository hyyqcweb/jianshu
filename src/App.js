import React, { Component } from 'react';
import Header from './common/header';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';
import {Provider} from 'react-redux';

// exact 精准匹配

class App extends Component {
  render() {
    return (
      <Provider store={store}>
	      <div>
	      	<Header/>
	        <BrowserRouter>
	        	<div>
	        		<Route path='/' exact component={Home}></Route>
	        		<Route path='/detail/:id' exact component={Detail}></Route>
	        	</div>
	        </BrowserRouter>
	      </div>
      </Provider>
    );
  }
}

export default App;
