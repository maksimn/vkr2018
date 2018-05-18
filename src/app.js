const express = require('express');
const config = require('./config.json');

const app = express();

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/..'));

app.get('/', (req, res) => {
    res.sendFile('./ui/index.html',  { root: __dirname });
});

app.listen(config.PORT, () => {
    console.log(`Express app listening on localhost:${config.PORT}`);
});