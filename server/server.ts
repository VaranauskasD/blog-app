import { BlogSchema } from './schemas'

require('dotenv').config()
const mongoose = require('mongoose')

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@ecom-app.zngmj.mongodb.net/Products?retryWrites=true&w=majority`
mongoose.connect(uri)

const db = mongoose.connection

db.once('open', () => {
  const Blog = mongoose.model('Blog', BlogSchema, 'blogs')

  const Blog1 = new Blog({
    title: 'server title',
    author: 'server author',
    body: 'server body',
    date: Date.now(),
  })

  Blog1.save((err: any, book: any) => {
    if (err) return console.error(err)
    console.log(`${book.name} saved`)
  })
})
