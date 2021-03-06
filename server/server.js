let env = process.env.NODE_ENV || 'development'
console.log('env#####', env);


if (env === 'development') {
  process.env.PORT = 3000//for deployment
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp'
} else if (env === 'test') {
  process.env.PORT = 3000
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest'
}

const _ =require('lodash')
const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');
const {ObjectID} = require('mongodb');

let app = express()
const port = process.env.PORT

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  })

  todo.save().then((doc) => {
    res.send(doc)
  }, (err) => {
    res.status(400).send(err)
  })
})

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (err) => {
    res.status(400).send(err)
  })
})

app.get('/todos/:id', (req, res) => {
  const id = req.params.id
  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send()
    }
    res.send({todo})
  }, (err) => {
    res.status(400).send()
  })
})

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id
  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }
  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      return res.status(404).send()
    }
    res.status(200).send({todo})
  }, (err) => {
    res.status(400).send()
  })
})

app.patch('/todos/:id', (req, res) => {
  const id = req.params.id
  const body = _.pick(req.body, ['text', 'completed'])

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime()
  } else {
    body.completed = false
    body.completedAt = null
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send()
    }

    res.send({todo})
  }).catch((err) => {
    res.status(400).send()
  })
})

app.listen(port, () => {
  console.log(`started on port ${port}`);
})

module.exports = {app}
