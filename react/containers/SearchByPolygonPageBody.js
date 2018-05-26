import React from 'react';
import { connect } from 'react-redux';
import { YMaps, Map, Placemark, Polygon  } from 'react-yandex-maps';

import { findAccidentsWithinPolygon } from '../actions/accidentsData';

class SearchByPolygonPageBody extends React.Component {
    constructor(props) {
        super(props);

        this.onMapBoundsChange = this.onMapBoundsChange.bind(this);
        this.onFindButtonClick = this.onFindButtonClick.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
        this.state = {
            mapState: { center: [55.76, 37.64], zoom: 10 },
            polygonCoordinates: []
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

    onFindButtonClick() {
        const {dispatch} = this.props;
        const {polygonCoordinates} = this.state;

        dispatch(findAccidentsWithinPolygon(polygonCoordinates));
    }

    onMapClick(e) {
        const {coords} = e._sourceEvent.originalEvent;

        this.setState({
            ...this.state,
            polygonCoordinates: [...this.state.polygonCoordinates, coords]
        });
    }

    render() {
        return (
            <div>
                <div className="yandex-map">
                    <YMaps>
                        <Map state={ this.state.mapState } 
                             width={ 600 } height={ 500 }
                             onClick={ this.onMapClick }
                             onBoundsChange={ this.onMapBoundsChange }>
                            <Polygon
                                geometry={{
                                    coordinates: [this.state.polygonCoordinates]
                                }}
                                options={{
                                    fillColor: '#FFFFFF00',
                                    strokeWidth: 2
                                }}
                            />
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
}))(SearchByPolygonPageBody);