import { combineReducers } from 'redux';
import dataReducer from './dataReducer'

const rootReducers = combineReducers({ dataReducer });

export default rootReducers;