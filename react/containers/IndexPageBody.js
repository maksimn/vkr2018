import React from 'react';
import { connect } from 'react-redux';
import { YMaps, Map, Placemark  } from 'react-yandex-maps';

import {
    loadAllAccidentsCoords,
    showAllAccidents,
    hideAllAccidents
} from '../actions/accidentsData';

class IndexPageBody extends React.Component {
    constructor(props) {
        super(props);

        this.onToggleButtonClick = this.onToggleButtonClick.bind(this);
    }

    onToggleButtonClick() {
        const { 
            allAccidentsCoords, 
            isAllAccidentsVisible, 
            showAllAccidents, 
            hideAllAccidents,
            loadAllAccidentsCoords
        } = this.props;

        // Три ситуации:
        // 1. Начальное состояние страницы, ничего не загружено, нажатие кнопки "Показать"
        // предлагает загрузить и отобразить данные обо всех авариях в виде меток
        // 2. Данные успешно загружены и отображены. Нажатие кнопки, на которой теперь вместо 
        // "Показать" написано "Скрыть", приводит к удалению меток карты
        // 3. Есть теперь нажать кнопку "Показать", то метки отобразятся вновь, повторная загрузка
        // данных не делается
        if (!allAccidentsCoords && !isAllAccidentsVisible) {
            showAllAccidents();
            loadAllAccidentsCoords();
        } else if (allAccidentsCoords && isAllAccidentsVisible) {
            hideAllAccidents();
        } else {
            showAllAccidents();
        }
    }

    render() {
        const { allAccidentsCoords, isAllAccidentsVisible } = this.props;
        let placemarks = null;

        if (isAllAccidentsVisible && allAccidentsCoords && allAccidentsCoords.length > 0) {
            placemarks = allAccidentsCoords.map(accident => (
                <Placemark
                    geometry={{
                        coordinates: [
                            accident.location.coordinates[1],
                            accident.location.coordinates[0]
                        ]
                    }}
                />
            ));
        }
 
        return (
            <div>
                <div className="yandex-map">
                    <YMaps>
                        <Map state={ { center: [55.76, 37.64], zoom: 10 } } 
                             width={ 600 } height={ 500 }
                             onClick={ this.onYMapClick }>
                            { placemarks }
                        </Map>
                    </YMaps>
                </div>

                <button type="button"
                        className={ 
                            `btn ${isAllAccidentsVisible ? 'btn-default': 'btn-primary' } show-toggle-button`
                        }
                        onClick={ this.onToggleButtonClick }>
                    { isAllAccidentsVisible ? 'Скрыть' : 'Показать' }
                </button>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        allAccidentsCoords: state.allCarAccidentsCoords,
        isAllAccidentsVisible: state.viewFlags.isAllAccidentsVisible
    }),
    (dispatch) => ({
        loadAllAccidentsCoords: () => {
            dispatch(loadAllAccidentsCoords());
        },
        showAllAccidents: () => {
            dispatch(showAllAccidents());
        },
        hideAllAccidents: () => {
            dispatch(hideAllAccidents());
        }
    })
)(IndexPageBody);