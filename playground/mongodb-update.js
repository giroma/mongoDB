
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log("unable to connect to mondodb server");
  }
  console.log('Connected to Monngodb server');
  const db = client.db('TodoApp')

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ac272ccf977b544510d9280')
  }, {
    $set: {
      name: 'Ari'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  client.close()
})
