const mongoose = require('mongoose')
const Schema = mongoose.Schema
const plm = require('passport-local-mongoose')

const userSchema = new Schema({
  name:String,
  email:{
    type:String,
    unique:true
  },
},{
  timestamps:{
    createdAt:true,
    updatedAt:true
  }
})

userSchema.plugin(plm,{usernameField:'email'})

module.exports = mongoose.model('User', userSchema)