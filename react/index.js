import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';

import store, { history } from './store';
import IndexPageBody from './containers/IndexPageBody';
import NavigationBar from './components/NavigationBar';
import NearestAccidentPageBody from './containers/NearestAccidentPageBody';
import SearchByPolygonPageBody from './containers/SearchByPolygonPageBody';

const TestComponent = () => (<div>Test</div>);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={ history }>
            <div>
                <NavigationBar />
                <Switch>
                    <Route exact path="/" component={IndexPageBody}/>
                    <Route exact path="/byPolygon" component={SearchByPolygonPageBody} />
                    <Route exact path="/nearest" component={NearestAccidentPageBody} />
                    <Route path="*" component={TestComponent}/>
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('react-app')
);