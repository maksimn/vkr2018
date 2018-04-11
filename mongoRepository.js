const MongoClient = require('mongodb').MongoClient;

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
    )
};

module.exports = mongoRepository;