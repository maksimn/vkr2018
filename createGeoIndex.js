const MongoClient = require('mongodb').MongoClient;
const config = require('./config.json');

MongoClient.connect(config.DB_URL).then(client => {
    const db = client.db(config.DB_NAME);
    
    console.log('\nCreating 2dsphere geo index...\n\n');
    db.collection('CarAccidents').createIndex({ location: '2dsphere' })
        .then(res => {
            console.log('\nIndex created successfully\n\n');
            client.close();
        }).catch(err => {
            console.log(err);
        });
}).catch(err => {
    console.log(err);
});