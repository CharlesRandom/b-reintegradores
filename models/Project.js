const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  name:String,
  objective:String,
  country:String,
  state:String,
  slogan:String,
  typeDescription:String,
  logo:String,
  universe:String,
  totalCost:Number,
  startDate:Date,
  endDate:Date,
  phase:String,
  context:String,
  video:String,
  workplan:String,
  agreement:String,
  status:{
    type:String,
    enum:["Pending Confirmation", "Active"],
    default:"Pending Confirmation"
  },
},{
  timestamps:{
    createdAt:true,
    updatedAt:true
  }
})

module.exports = mongoose.model('Project', projectSchema)