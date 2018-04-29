const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        console.log('There was an error', err);
    }else {
        console.log('Everything looks good');
    }

    db.collection('Todos').findOneAndUpdate({
        completed: false //filters the ones with false completed property
    }, {
        $set: {
            completed: true //sets the completed property to true
        }
    }, {
        returnOriginal: false //returns the updated document, if true returns the original one
    }).then((res) => {
        console.log(res);
    })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ae593b81cad002ac0735a86')
    }, {
        $set: {
            name: 'Rajak'
        },
        $inc: {
            age: 2 //increments the existing value by 2, can also use -1, that will minus 1 every time the app runs
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    })

    //db.close()
})