const MongoClient = require('mongodb').MongoClient;

const config = require('./config.json');

const mongoRepository = {
    findAccidentsIdsAndGeoCoordinates: function() {
        return new Promise(resolve => {
            MongoClient.connect(config.DB_URL, (err, client) => {
                if (err) {
                    throw new Error('Not connected correctly to server');
                }
                
                const db = client.db(config.DB_NAME);
                
                db.collection('CarAccidents').find({})
                                 .project( { "geo_code": 1 })
                                 .toArray((err, docs) => {
                    if (err) {
                        throw new Error('Error querying data.');
                    }
        
                    resolve(docs);

                    client.close();
                });
            });
        });
    }
};

module.exports = mongoRepository;