import React from 'react';
import { connect } from 'react-redux';
import { YMaps, Map, Placemark  } from 'react-yandex-maps';

import { getNearestAccident } from '../actions/accidentsData';

class NearestAccidentPageBody extends React.Component {
    constructor(props) {
        super(props);

        this.onMapBoundsChange = this.onMapBoundsChange.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
        this.onFindButtonClick = this.onFindButtonClick.bind(this);
        this.state = {
            mapState: { center: [55.76, 37.64], zoom: 10 },
            startPlaceMarkCoords: null
        };
    }

    onMapBoundsChange(e) {
        const event = e.originalEvent;
        const center = event.newCenter;
        const zoom = event.newZoom;

        this.setState({
            ...this.state,
            mapState: { center, zoom }
        });
    }

    onMapClick(e) {
        const {coords} = e._sourceEvent.originalEvent;

        this.setState({
            ...this.state,
            startPlaceMarkCoords: coords
        });
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
        const startPlacemark = this.isStartPlacemarkSet ? 
            <Placemark geometry={{ coordinates: this.state.startPlaceMarkCoords }}
                properties={{ iconContent: '?' }}
                options={{ preset: 'islands#blackStretchyIcon' }} /> : null;
        const nearestAccidentPlacemark = nearestAccident ? 
                <Placemark geometry={{ coordinates: nearestAccident.coordinates }} /> : null;

        return (
            <div>
                <div className="yandex-map">
                    <YMaps>
                        <Map state={ this.state.mapState } 
                             width={ 600 } height={ 500 }
                             onClick={ this.onMapClick }
                             onBoundsChange={ this.onMapBoundsChange }>
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
