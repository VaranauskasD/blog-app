import mongoose from 'mongoose'

export const BlogSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
  date: { type: Date, default: Date.now },
})
