const express = require('express');
const config = require('../config.json');

const htmlHandler = require('./routeHandlers/htmlHandler');
const accidentsJsonHandler = require('./routeHandlers/accidentsJsonHandler');

const app = express();

app.use(express.static(__dirname + '/..'));

app.get('/carAccidents', accidentsJsonHandler.sendAccidentsAllCoordsAndIds);
app.get('/nearest/:coords', accidentsJsonHandler.sendAccidentsNearest);
app.get('/polygon/:coords', accidentsJsonHandler.sendAccidentsWithinPolygon);
app.get('/accidentId/:id', accidentsJsonHandler.sendAccidentWithId);

app.get('*', htmlHandler);

app.listen(config.PORT, () => {
    console.log(`Express app listening on localhost:${config.PORT}`);
});