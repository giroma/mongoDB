const {ObjectID} = require('mongodb')

const {mongoose} = require("./../server/db/mongoose")
const {Todo} = require("./../server/models/todo")
const {User} = require("./../server/models/user")

// Todo.remove({}).then((result) => {
//   console.log(result);
// })

Todo.findByIdAndRemove('5ac7ce548f7b40bb8fbc7857' ).then((todo) => {
  console.log(todo);
})
