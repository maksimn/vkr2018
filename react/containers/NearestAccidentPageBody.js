import React from 'react';
import { connect } from 'react-redux';
import { YMaps, Map, Placemark  } from 'react-yandex-maps';

class NearestAccidentPageBody extends React.Component {
    constructor(props) {
        super(props);

        this.onMapClick = this.onMapClick.bind(this);
        this.state = {startPlaceMarkCoords: null};
    }

    onMapClick(e) {
        const {coords} = e._sourceEvent.originalEvent;

        this.setState({startPlaceMarkCoords: coords});
    }

    get isStartPlacemarkSet() {
        const startPlaceMarkCoords = this.state ? this.state.startPlaceMarkCoords : null;

        return startPlaceMarkCoords && startPlaceMarkCoords.length == 2; 
    }

    render() {
        let startPlacemark = null; 
        
        if (this.isStartPlacemarkSet) {
            startPlacemark = 
                <Placemark 
                    geometry={{ coordinates: this.state.startPlaceMarkCoords }}
                    options={{ preset: 'islands#blackStretchyIcon' }} />;
        }

        return (
            <div>
                <div className="yandex-map">
                    <YMaps>
                        <Map state={ { center: [55.76, 37.64], zoom: 10 } } 
                             width={ 600 } height={ 500 }
                             onClick={ this.onMapClick }>
                             { startPlacemark }
                        </Map>
                    </YMaps>
                </div>
                <button type="button" className="btn btn-primary">Найти</button>
            </div>
        );
    }
}

export default connect()(NearestAccidentPageBody);