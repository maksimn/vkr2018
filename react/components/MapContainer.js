import React from 'react';
import { YMaps, Map, Placemark  } from 'react-yandex-maps';
import PropTypes from 'prop-types';
 
const mapState = {
    center: [55.76, 37.64],
    zoom: 10
};

class MapContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { accidents } = this.props;
        
        const placemarks = (accidents && accidents.length > 0) ?
            accidents.map(accident => (
                <Placemark
                    geometry={{
                        coordinates: [
                            accident.location.coordinates[1],
                            accident.location.coordinates[0]
                        ]
                    }}
                />
            )) : null;

        return (
            <div className="yandex-map">
                <YMaps>
                    <Map state={mapState} width={600} height={500}>
                        { placemarks }
                    </Map>
                </YMaps>
            </div>
        );
    }
}

MapContainer.propTypes = {
    accidents: PropTypes.array.isRequired
}

export default MapContainer;
