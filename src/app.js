const express = require('express');
const config = require('./config.json');
const mongoRepository = require('./mongoRepository');

const app = express();
const root = __dirname + '/..';

app.use(express.static(root));

app.get('/carAccidents', (req, res) => {
    mongoRepository.findAccidentsIdsAndGeoCoordinates()
        .then(carAccidents => {
            res.json(carAccidents);
        }).catch(err => {
            res.sendStatus(404).send();
        });
});

app.get('/nearest/:coords', (req, res) => {
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
});

app.get('*', (req, res) => {
    res.sendFile('/dist/index.html',  { root: root });
});

app.listen(config.PORT, () => {
    console.log(`Express app listening on localhost:${config.PORT}`);
});