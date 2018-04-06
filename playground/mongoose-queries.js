const {ObjectID} = require('mongodb')

const {mongoose} = require("./../server/db/mongoose")
const {Todo} = require("./../server/models/todo")
const {User} = require("./../server/models/user")

const id = '6ac29fe8ee967f50ec6d970b11'

if (!ObjectID.isValid(id)) {
  console.log("id invalid");
}


// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// })
//
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// })
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('id not found');
//   }
//   console.log('Todobyid', todo);
// })

User.findById('5ac28d089678344b1155d77e11').then((user) => {
  if (!user) {
    return console.log('unable to find user');
  }
  console.log(JSON.stringify(user,undefined,2));
}, (err) => {
  console.log(err);
})
