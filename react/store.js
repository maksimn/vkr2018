import {applyMiddleware, createStore} from "redux";
import {createLogger} from 'redux-logger';

import reducers from './reducers';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducers, middleware);

export default store;