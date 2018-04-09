const mongoRepository = require('./mongoRepository');

mongoRepository.findAccidentsIdsAndGeoCoordinates()
    .then(docs => {
        console.log(
            `${docs.length} documents found.\n\n`,
            'First document: \n',
            docs[0]
        );
    });
