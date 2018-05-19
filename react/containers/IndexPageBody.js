import React from 'react';
import { connect } from 'react-redux';

import { loadAllAccidentsCoords } from '../actions/accidentsData';
import MapContainer from './MapContainer';

class IndexPageBody extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadAllAccidentsCoords();
    }

    render() {
        return (
            <MapContainer />
        );
    }
}

export default connect(
    (state) => ({}),
    (dispatch) => ({
        loadAllAccidentsCoords: () => {
            dispatch(loadAllAccidentsCoords());
        }
    })
)(IndexPageBody);