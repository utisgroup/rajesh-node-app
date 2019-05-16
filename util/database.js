 const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
    MongoClient.connect('mongodb+srv://rajesh:Ec5E6UeL5W5H3Wlf@rajesh-node-app-uepxh.mongodb.net/test?retryWrites=true')
    .then(client => {
       
        console.log('Connected Successfully...');
        // console.log(client);
        callback(client);
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = mongoConnect;