import React from 'react';
import { connect } from 'react-redux';

class NearestAccidentPageBody extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Nearest Accident Page Body</div>
        );
    }
}

export default connect()(NearestAccidentPageBody);