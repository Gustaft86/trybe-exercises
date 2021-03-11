import { combineReducers } from 'redux';
import dogReducer from './dogReducer';

export const rootReducer = combineReducers({ dogReducer })