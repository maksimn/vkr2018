const MongoClient = require('mongodb').MongoClient;
 
const url = 'mongodb://localhost:27017'; // URL соединения
const dbName = 'CarAccidents'; // Имя базы данных

function selectCoordinatesOfAllCarAccidents(db, callback) {
    db.collection('CarAccidents').find({})
                                 .project( { "geo_code": 1 })
                                 .toArray((err, docs) => {
        if (err) {
            throw new Error('Error querying data.');
        }
        
        console.log('Found the following documents: ', docs);
        
        callback();
    });
}

MongoClient.connect(url, (err, client) => {
    if (err) {
      throw new Error('Not connected correctly to server');
    }
    
    const db = client.db(dbName);
    
    selectCoordinatesOfAllCarAccidents(db, () => { client.close(); });
});
