require('dotenv').config()
const mongoose = require('mongoose')

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@ecom-app.zngmj.mongodb.net/Products?retryWrites=true&w=majority`
mongoose.connect(uri)
