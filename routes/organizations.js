const router = require('express').Router()
const User = require('../models/User')

const isAuth = (req, res, next) => {
  if(req.isAuthenticated()) return next()
  return res.status(403).json({message:'No pasas perro'})
}

//profile
router.get('/profile/:id', isAuth, (req, res, next)=>{
  const {id} = req.params
  User.findById(id).populate('pets').populate('address')
  .then(user => {
    return res.status(200).json(user)
  })
  .catch(e => res.json(e))
})

//Update Organization Data
router.put('/data', (req, res, next) => {
  const { user } = req.body
  User.findByIdAndUpdate(user, req.body, { 'new': true})
    .then(user => {
      res.status(200).json(user)
    })
    .catch(e=>{
      res.status(404).json(e)
    })
})

module.exports = router