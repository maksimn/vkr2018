ymaps.ready(init);
var myMap;

function init() {
    myMap = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 10
    });
}