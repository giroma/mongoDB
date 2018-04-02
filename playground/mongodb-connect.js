// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log("unable to connect to mondodb server");
  }
  console.log('Connected to Monngodb server');
  const db = client.db('TodoApp')
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'arisutur',
  //   age: 342,
  //   location: 'tdot oh oh'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert user', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  client.close()
})
