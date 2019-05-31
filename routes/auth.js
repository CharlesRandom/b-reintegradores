const router = require('express').Router()
const User = require('../models/User')
const passport = require('../helpers/passport')
const {welcomeMail} = require('../helpers/mailer')

const isAuth = (req, res, next) => {
  if(req.isAuthenticated()) return next()
  return res.status(403).json({message:'No pasas perro'})
}

//Confirmation code sent by email. If valid -> active user
router.get('/confirm/:confirmationCode', (req, res, next)=>{
  const {confirmationCode} = req.params
  User.findOne({confirmationCode})
  .then(user=>{
    User.findByIdAndUpdate(user._id,{$set: {status: "Active"}})
    .then(u=>{
      res.status(200).json(u)
    })
    .catch(e=>{
      res.status(404).json(e)
    })
  })
  .catch(e=>{
    res.status(500).json(e)
  })
})

//Signup
router.post('/signup', (req, res, next) => {
  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let token = '';
  for (let i = 0; i < 25; i++) {
      token += characters[Math.floor(Math.random() * characters.length )];
  }
  req.body['confirmationCode'] = token
  User.register(req.body, req.body.password)
  .then(user => {
    welcomeMail(user.email, user)
    res.status(201).json(user)
  }).catch(e => {
    res.status(500).json(e)
  })
})

//login
router.post('/login', (req, res, next) => {
  passport.authenticate('local',(err, user, info) => {
    if(err) return res.status(500).json(info)
    if(!user) return res.status(404).json(info)
    req.login(user,(err)=>{
      return res.status(200).json(user)
    })
  })(req, res, next)
})

//logout
router.get('/logout', (req, res, next)=>{
  req.logOut()
  res.status(200).json({message:'Logged out successfully'})
})

//profile
router.get('/profile/:id', isAuth, (req, res, next)=>{
  const {id} = req.params
  User.findById(id).populate('pets').populate('address')
  .then(user => {
    return res.status(200).json(user)
  })
  .catch(e => res.json(e))
})

module.exports = router