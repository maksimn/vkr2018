import {applyMiddleware, createStore} from "redux";
import {createLogger} from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
import thunk from 'redux-thunk';

export const history = createHistory();

const routingMiddleware = routerMiddleware(history);

const middleware = applyMiddleware(routingMiddleware, thunk, createLogger());
const store = createStore(reducers, middleware);

export default store;