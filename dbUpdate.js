const MongoClient = require('mongodb').MongoClient;

const config = require('./config.json');

MongoClient.connect(config.DB_URL).then(client => {
    const db = client.db(config.DB_NAME);
    const carAccidents = db.collection('CarAccidents');

    carAccidents.find().forEach(doc => {
        const setLocationField = {
            $set: {
                location: {
                    type: 'Point',
                    coordinates: [doc.geo_code.longitude, doc.geo_code.latitude]
                }
            }
        };

        carAccidents.update({ _id: doc._id }, setLocationField);
    }, () => {
        console.log('Updated successfully.');
        client.close();
    });
}).catch(err => {
    reject(err);
});