import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import IndexPageBody from './containers/IndexPageBody';
import NavigationBar from './components/NavigationBar';

ReactDOM.render(
    <Provider store={store}>
        <div>
            <NavigationBar />
            <IndexPageBody />
        </div>
    </Provider>,
    document.getElementById('react-app')
);