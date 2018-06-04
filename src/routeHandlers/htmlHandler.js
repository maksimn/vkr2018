const htmlHandler = (req, res) => {
    res.sendFile('/dist/index.html',  { root: __dirname + '/../..' });
};

module.exports = htmlHandler;
