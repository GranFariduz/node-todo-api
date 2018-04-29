const {MongoClient, ObjectID} =  require('mongodb');

//connecting to the database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('Unable to connect to the mongo server');
    }else {
        console.log('Connected to the server');
    }

//     db.collection('Todos').find({
//         completed: false
//     }).toArray().then((docs) => {
//         console.log(`Todos
// --------------------------
// ${JSON.stringify(docs, undefined, 2)}
// `);
//     }, (err) => {
//         console.log('Unable to fetch todos', err);
//     })


    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);

    }, (err) => {
        console.log('Unable to fetch todos', err);
    })

    db.collection('Users').find({name: 'Cadis Etrama di Raizel'}).count().then((count) => {
        console.log(`Users: ${count}`);
    }, (err) => {
        console.log('There was an error fetching the docs', err);
    });


    //closing connection
    db.close();

});