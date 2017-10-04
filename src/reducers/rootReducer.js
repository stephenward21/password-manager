import registerReducer from './registerReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	registerReducer: registerReducer
});

export default rootReducer;
