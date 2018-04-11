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
    return new Promise((resolve, reject) => {
        mongoRepository.findCarAccidentsByCoordinates(37.2333, 55.4224)
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
}).then(() => {
    return new Promise((resolve, reject) => {
        mongoRepository.findCarAccidentsInsideCircle([37.2333, 55.4224], 5000)
            .then(docs => {
                console.log(
                    `\n\nfindCarAccidentsInsideCircle(): ${docs.length} documents found.\n\n`
                );
                resolve();
            }).catch(err => {
                reject(err);
            });
    });
}, err => {
    console.log(err);
}).catch(err => {
    console.log(err);
});