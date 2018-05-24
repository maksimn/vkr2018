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

app.get('*', (req, res) => {
    res.sendFile('/dist/index.html',  { root: root });
});

app.listen(config.PORT, () => {
    console.log(`Express app listening on localhost:${config.PORT}`);
});