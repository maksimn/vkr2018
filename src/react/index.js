import React from 'react';
import ReactDOM from 'react-dom';
import MapContainer from './containers/MapContainer';
import NavigationBar from './components/NavigationBar';

ReactDOM.render(
    <div>
        <NavigationBar />
        <MapContainer />
    </div>,
    document.getElementById('react-app')
);