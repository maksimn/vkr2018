import React from 'react';
import { connect } from 'react-redux';
import { YMaps, Map, Placemark  } from 'react-yandex-maps';

import { getNearestAccident } from '../actions/accidentsData';

class NearestAccidentPageBody extends React.Component {
    constructor(props) {
        super(props);

        this.onMapClick = this.onMapClick.bind(this);
        this.onFindButtonClick = this.onFindButtonClick.bind(this);
        this.state = {startPlaceMarkCoords: null};
    }

    onMapClick(e) {
        const {coords} = e._sourceEvent.originalEvent;

        this.setState({startPlaceMarkCoords: coords});
    }

    onFindButtonClick() {
        this.props.dispatch(getNearestAccident(this.state.startPlaceMarkCoords));
    }

    get isStartPlacemarkSet() {
        const startPlaceMarkCoords = this.state ? this.state.startPlaceMarkCoords : null;

        return startPlaceMarkCoords && startPlaceMarkCoords.length == 2; 
    }

    render() {
        const {nearestAccident} = this.props;
        let startPlacemark = null, 
            nearestAccidentPlacemark = null; 
        
        if (this.isStartPlacemarkSet) {
            startPlacemark = 
                <Placemark 
                    geometry={{ coordinates: this.state.startPlaceMarkCoords }}
                    properties={{
                        iconContent: '?'
                    }}
                    options={{ preset: 'islands#blackStretchyIcon' }} />;
        }

        if (nearestAccident) {
            nearestAccidentPlacemark = 
                <Placemark 
                    geometry={{ coordinates: nearestAccident.coordinates }} />;
        }

        return (
            <div>
                <div className="yandex-map">
                    <YMaps>
                        <Map state={ { center: [55.76, 37.64], zoom: 10 } } 
                             width={ 600 } height={ 500 }
                             onClick={ this.onMapClick }>
                             { startPlacemark }
                             { nearestAccidentPlacemark }
                        </Map>
                    </YMaps>
                </div>
                <button type="button" className="btn btn-primary"
                    onClick={ this.onFindButtonClick }>Найти</button>
            </div>
        );
    }
}

export default connect(state => ({
    nearestAccident: state.nearestAccident
}))(NearestAccidentPageBody);