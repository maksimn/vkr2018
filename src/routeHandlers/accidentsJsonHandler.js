const mongoRepository = require('../mongoRepository');

const accidentsJsonHandler = {};

accidentsJsonHandler.sendAccidentsAllCoordsAndIds = (req, res) => {
    mongoRepository.findAccidentsIdsAndGeoCoordinates()
        .then(carAccidents => {
            res.json(carAccidents);
        }).catch(err => {
            res.sendStatus(404).send();
        });
};

accidentsJsonHandler.sendAccidentsNearest = (req, res) => {
    const coords = JSON.parse(req.params.coords);

    mongoRepository.findNearestCarAccidents([coords[1], coords[0]], 1)
        .then(result => {
            const accidentData = result[0];
            const _id = accidentData._id,
                latitude = accidentData.location.coordinates[0],
                longitude = accidentData.location.coordinates[1];

            res.json({
                _id,
                coordinates: [longitude, latitude]
            });
        }).catch(err => {
            res.sendStatus(404).send();
        });
};

accidentsJsonHandler.sendAccidentsWithinPolygon = (req, res) => {
    const coords = JSON.parse(req.params.coords);
    const coordinates = coords.map(c => ([c[1], c[0]]));
    coordinates.push(coordinates[0]);

    mongoRepository.findCarAccidentsWithinGeometryShape('Polygon', [coordinates])
        .then(result => {
            res.json(result);
        }).catch(err => {
            res.sendStatus(404).send();
        });
};

accidentsJsonHandler.sendAccidentWithId = (req, res) => {
    const id = req.params.id;

    mongoRepository.findAccidentById(id)
        .then(result => {
            res.json(result);
        }).catch(err => {
            res.sendStatus(404).send();
        });
};

module.exports = accidentsJsonHandler;
