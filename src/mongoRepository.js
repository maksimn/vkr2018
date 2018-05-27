const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const config = require('./config.json');

const connectAndQueryDB = query => (
    new Promise((resolve, reject) => {
        MongoClient.connect(config.DB_URL).then(client => {
            const db = client.db(config.DB_NAME);

            query(db).toArray()
                .then(docs => {
                    resolve(docs);
                    client.close();
                }).catch(err => {
                    reject(err);
                });
        }).catch(err => {
            reject(err);
        });
    })
);

const mongoRepository = {
    findAccidentById: id => (
        new Promise((resolve, reject) => {
            MongoClient.connect(config.DB_URL).then(client => {
                const db = client.db(config.DB_NAME);

                db.collection('CarAccidents').findOne({_id: ObjectID(id)})
                    .then(docs => {
                        resolve(docs);
                        client.close();
                    }).catch(err => {
                        reject(err);
                    });
            }).catch(err => {
                reject(err);
            });
        })
    ),
    findAccidentsIdsAndGeoCoordinates: () => (
        connectAndQueryDB(db => (
            db.collection('CarAccidents')
                .find()
                .project({ "location": 1 })
            )
        )
    ),

    findCarAccidentsByCoordinates: (longitude, latitude) => (
        connectAndQueryDB(db => (
            db.collection('CarAccidents')
                .find({
                    'location.coordinates': {
                        $eq: [longitude, latitude]
                    }
                })
        )
        )
    ),

    findCarAccidentsInsideCircle: function (coordinates, radius) {
        return this.findCarAccidentsInsideTorus(coordinates, 0, radius)
    },

    findCarAccidentsInsideTorus: (coordinates, minDistance, maxDistance) => (
        connectAndQueryDB(db => (
            db.collection('CarAccidents')
                .find({
                    location: {
                        $nearSphere: {
                            $geometry: {
                                type: 'Point',
                                coordinates: coordinates
                            },
                            $minDistance: minDistance,
                            $maxDistance: maxDistance
                        }
                    }
                })
        )
        )
    ),

    findCarAccidentsThatIntersectsGeoObject: (type, coordinates) => (
        connectAndQueryDB(db => (
            db.collection('CarAccidents')
                .find({
                    location: {
                        $geoIntersects: {
                            $geometry: {
                                type: type,
                                coordinates: coordinates
                            }
                        }
                    }
                })
        )
        )
    ),

    // type = Polygon | MultiPolygon
    findCarAccidentsWithinGeometryShape: (type, coordinates) => (
        connectAndQueryDB(db => (
            db.collection('CarAccidents')
                .find({
                    location: {
                        $geoWithin: {
                            $geometry: {
                                type: type,
                                coordinates: coordinates
                            }
                        }
                    }
                })
                .project({ 'location': 1 })
            )
        )
    ),

    findNearestCarAccidents: (coordinates, n) => (
        connectAndQueryDB(db => (
            db.collection('CarAccidents').aggregate([{
                $geoNear: {
                    near: { type: "Point", coordinates: coordinates },
                    distanceField: "calculatedDistance",
                    num: n,
                    spherical: true
                }
            }])
        ))
    )
};

module.exports = mongoRepository;