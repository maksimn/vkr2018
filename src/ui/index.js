ymaps.ready(init);
var myMap;

function init() {
    myMap = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 10
    });

    axios('/carAccidents')
        .then(function(carAccidents) {
            console.log(carAccidents);
        }).catch(function(err) {
            console.log(err);
        });
}