import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
 
const mapState = {
    center: [55.76, 37.64],
    zoom: 10
};

class MapContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="yandex-map">
                <YMaps>
                    <Map state={mapState} width={600} height={500}></Map>
                </YMaps>
            </div>
        );
    }
}

export default MapContainer;
