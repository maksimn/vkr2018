const MongoClient = require('mongodb').MongoClient;

const config = require('./config.json');

const mongoRepository = {
    findAccidentsIdsAndGeoCoordinates: function() {
        return new Promise((resolve, reject) => {
            MongoClient.connect(config.DB_URL).then(client => {
                const db = client.db(config.DB_NAME);
                
                db.collection('CarAccidents')
                    .find({})
                    .project( { "geo_code": 1 })
                    .toArray()
                    .then(docs => {
                        resolve(docs);
                        client.close();
                    }).catch(err => {
                        reject(err);
                    });
            }).catch(err => {
                reject(err);
            });
        });
    }
};

module.exports = mongoRepository;