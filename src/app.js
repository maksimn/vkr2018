const express = require('express');
const config = require('./config.json');
const mongoRepository = require('./mongoRepository');

const app = express();

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/..'));

app.get('/', (req, res) => {
    res.sendFile('./ui/index.html',  { root: __dirname });
});

app.get('/carAccidents', (req, res) => {
    mongoRepository.findAccidentsIdsAndGeoCoordinates()
        .then(carAccidents => {
            res.json(carAccidents);
        }).catch(err => {
            res.sendStatus(404).send();
        });
});

app.listen(config.PORT, () => {
    console.log(`Express app listening on localhost:${config.PORT}`);
});