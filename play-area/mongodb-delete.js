const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('There was an error connecting to the database', err);
    }else {
        console.log('Connected to the server');
    }

    //deleteMany
    // db.collection('Todos').deleteMany({
    //     completed: false
    // }).then((res) => {
    //     console.log(res);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'FUCK'
    // }).then((res) => {
    //     console.log(res);
    // });

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({
        text: 'FUCK'
    }).then((res) => {
        console.log(res);
    })

    //db.close()
})