import { fromJS } from 'immutable';
import * as constans from './constants';

const defaultState = fromJS({
	login: false
});

export default (state = defaultState, action) => {
	switch(action.type) {
		default: 
			return state;
	}
}