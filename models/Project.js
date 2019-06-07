const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  name:String,
  responsible: String,
  country:String,
  region:String,
  description: String,
  responsible: String,
  deductible: Boolean,
  objective: String,
  population: String,
  status:{
    type:String,
    enum:["Pending Confirmation", "Active", "Deleted"],
    default:"Pending Confirmation"
  },
  
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
},{
  timestamps:{
    createdAt:true,
    updatedAt:true
  }
})

module.exports = mongoose.model('Project', projectSchema)