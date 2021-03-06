const mongoose = require('mongoose')
const Schema = mongoose.Schema
const plm = require('passport-local-mongoose')

const userSchema = new Schema({
  username:String,
  lastname:String,
  country:String,
  email:{
    type:String,
    unique:true
  },
  userType:{
    type:String,
    enum:["donate","org","formation","angel"],
    default: 'donate'
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
  projectDescription:String,
  comment:String,
  establishment:Date,
  constanciaFiscal:String,
  actaConstitutiva:String,
  organigrama:String,
  notarial:String,
  estatutos:String,
  curriculumVitae:String,
  comprobanteDom:String,
  estadoFinanciero:String,
  oficioSAT:String,
  situacionFiscal:String,
  declaracion:String,
  FCDI:String,
  CURP:String,
  RFC:String,
  profession:String,
  address:String,
  birthdate:Date,
  startTime:Date,
  endTime:Date,
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
  phone: Number,
  country: String,
  region: String,
},{
  timestamps:{
    createdAt:true,
    updatedAt:true
  }
})

userSchema.plugin(plm,{usernameField:'email'})

module.exports = mongoose.model('User', userSchema)