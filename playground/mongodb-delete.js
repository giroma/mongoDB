
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log("unable to connect to mondodb server");
  }
  console.log('Connected to Monngodb server');
  const db = client.db('TodoApp')

  db.collection('Todos'). findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  })

  client.close()
})
