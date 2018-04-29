//const MongoClient = require('mongodb').MongoClient;
//Object destructuring
const {MongoClient, ObjectID} =  require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('Unable to connect to the mongo server');
    }else {
        console.log('Connected to the server');
    }

    // db.collection('Todos').insertOne({
    //     text: 'Some text here', 
    //     completed: false
    // }, (err, res) => {
    //     if(err) {
    //         console.log('An error has occured ' + err);
    //     }else {
    //         console.log(JSON.stringify(res.ops, undefined, 2));
    //     }
    // });

    db.collection('Users').insertOne({
        name: 'Cadis Etrama di Raizel',
        age: 26,
        location: 'Frankenstein\'s school'
    }, (err, res) => {
        if(err) {
            console.log('Cannot insert data: ' + err);
        }else {
            console.log('The data: ' + res.ops[0]._id.getTimestamp()); //important
        }
    });

    db.close();
});