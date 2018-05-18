const mongoRepository = require('../src/mongoRepository');
const promiseChain = require('./promiseChain');

promiseChain((resolve, reject) => {
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
}, (resolve, reject) => {
    mongoRepository.findCarAccidentsByCoordinates(37.2333, 55.4224)
        .then(docs => {
            console.log(`findCarAccidentsByCoordinates(): ${docs.length} documents found.\n`, docs);
            resolve();
        }).catch(err => {
            reject(err);
        });
}, (resolve, reject) => {
    mongoRepository.findCarAccidentsInsideCircle([37.2333, 55.4224], 5000)
        .then(docs => {
            console.log(`\n\nfindCarAccidentsInsideCircle(): ${docs.length} documents found.\n\n`);
            resolve();
        }).catch(err => {
            reject(err);
        });
}, (resolve, reject) => {
    mongoRepository.findCarAccidentsInsideTorus([37.2333, 55.4224], 2000, 5000)
        .then(docs => {
            console.log(`\n\nfindCarAccidentsInsideTorus(): ${docs.length} documents found.\n\n`);
            resolve();
        }).catch(err => {
            reject(err);
        });
}, (resolve, reject) => {
    mongoRepository.findCarAccidentsThatIntersectsGeoObject('Polygon', [
            [[37.2333, 55.4224], [37.2333, 55.8], [37.5, 55.8], [37.2333, 55.4224]]
    ]).then(docs => {
        console.log(`\n\nfindCarAccidentsThatIntersectsGeoObject(): ${docs.length} documents found.\n\n`);
        resolve();
    }).catch(err => {
        reject(err);
    });
}, (resolve, reject) => {
    mongoRepository.findCarAccidentsThatIntersectsGeoObject(
            'LineString', 
            [[37.2333, 55.4224], [37.2333, 55.8]]
    ).then(docs => {
        console.log(`\n\nfindCarAccidentsThatIntersectsGeoObject() LineString:  ${docs.length} documents found.\n\n`);
        resolve();
    }).catch(err => {
        reject(err);
    });
}, (resolve, reject) => {
    mongoRepository.findCarAccidentsWithinGeometryShape('Polygon', [
        [[37.2333, 55.4224], [37.2333, 55.8], [37.5, 55.8], [37.2333, 55.4224]]
    ]).then(docs => {
        console.log(`\n\nfindCarAccidentsWithinGeometryShape(): ${docs.length} documents found.\n\n`);
        resolve();
    }).catch(err => {
        reject(err);
    });
}, (resolve, reject) => {
    mongoRepository.findNearestCarAccidents([37.23, 55.42], 1).then(docs => {
        console.log(`\n\nfindNearestCarAccidents(): ${docs.length} documents found.\n\n`, 
            '\nLocation: ', docs[0].location.coordinates,
            '\ndistance: ', docs[0].calculatedDistance);
        resolve();
    }).catch(err => {
        reject(err);
    });
});
