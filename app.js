const mongoRepository = require('./mongoRepository');

mongoRepository.findAccidentsIdsAndGeoCoordinates()
    .then(docs => {
        console.log(
            `${docs.length} documents found.\n\n`,
            'First document: \n',
            docs[0]
        );
    }).catch(err => {
        console.log(err);
    });

mongoRepository.findCarAccidentsByCoordinates(55.4224, 37.2333)
    .then(docs => {
        console.log(
            `findCarAccidentsByCoordinates(): ${docs.length} documents found.\n\n`,
            docs, '\n\n'
        );
    }).catch(err => {
        console.log(err);
    });
