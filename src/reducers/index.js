import { combineReducers, applyMiddleware } from 'redux';
import { createStore } from '@reduxjs/toolkit';
import reposReducer from './reposReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  repos: reposReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));