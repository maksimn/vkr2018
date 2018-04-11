const mongoRepository = require('./mongoRepository');

new Promise((resolve, reject) => {
    mongoRepository.findAccidentsIdsAndGeoCoordinates()
        .then(docs => {
            console.log(
                `${docs.length} documents found.\n\n`,
                'First document: \n',
                docs[0]
            );
            resolve();
        }).catch(err => {
            reject(err);
        });
}).then(() => {
    return new Promise(function (resolve, reject) {
        mongoRepository.findCarAccidentsByCoordinates(55.4224, 37.2333)
            .then(docs => {
                console.log(
                    `findCarAccidentsByCoordinates(): ${docs.length} documents found.\n\n`,
                    docs, '\n\n'
                );
                resolve();
            }).catch(err => {
                reject(err);
            });
    });
}, err => {
    console.log(err);
});
