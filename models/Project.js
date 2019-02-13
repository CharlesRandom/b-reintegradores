const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
  name:String,
  lastname:String,
  country:String,
  email:{
    type:String,
    unique:true
  },
  userType:{
    type:String,
    enum:["Donatario","Organización","Visitante"]
  },
  donationOrigin:{
    type:String,
    enum:["Público","Privado"]
  },
  donationType:{
    type:String,
    enum:["Gub","Int", "Fil", "IP"]
  },
  person:{
    type:String,
    enum:["Física", "Moral"]
  },
  receivedResources:Boolean,
  resourcesOrigin:{
    type:String,
    enum:["Público","Privado"]
  },
  donee:Boolean,
  formerProyects:Boolean,
  numFormerProyects:Number,
  complianceformerProyects:String,
  comment:String,
  establishment:Date,
  constanciaFiscal:String,
  actaConstitutiva:String,
  CURP:String,
  RFC:String,
  address:String,
  birthdate:Date,
  objective:String,
  gender:{
    type:String,
    enum:["Femenino", "Masculino"]
  },
  status:{
    type:String,
    enum:["Pending Confirmation", "Active"],
    default:"Pending Confirmation"
  },
  confirmationCode:{
    type:String,
    unique:true
  },
},{
  timestamps:{
    createdAt:true,
    updatedAt:true
  }
})

module.exports = mongoose.model('Project', projectSchema)