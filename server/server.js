require('dotenv').config()
const mongoose = require('mongoose')
const User = require('./schemas/user')

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@ecom-app.zngmj.mongodb.net/Products?retryWrites=true&w=majority`
mongoose.connect(uri)

async function run() {
  User.insertMany([{ name: 'Kyle' }])
}

run()
