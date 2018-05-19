import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadAllAccidentsCoords } from '../actions/accidentsData';
import MapContainer from '../components/MapContainer';

class IndexPageBody extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadAllAccidentsCoords();
    }

    render() {
        const {allAccidentsCoords} = this.props;
 
        return (
            <MapContainer accidents={ allAccidentsCoords } />
        );
    }
}

IndexPageBody.propTypes = {
    allAccidentsCoords: PropTypes.array
};

export default connect(
    (state) => ({
        allAccidentsCoords: state.allCarAccidentsCoords
    }),
    (dispatch) => ({
        loadAllAccidentsCoords: () => {
            dispatch(loadAllAccidentsCoords());
        }
    })
)(IndexPageBody);