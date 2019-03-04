const router = require('express').Router()
const Project = require('../models/Project')
// const User = require('../models/User')

const isAuth = (req, res, next) => {
  if(req.isAuthenticated()) return next()
  return res.status(403).json({message:'No pasas perro'})
}

//Add project
router.post('/new', (req, res, next) => {
  // const { user } = req.body
  Project.create(req.body)
  .then(project => {
    res.status(201).json(project)
  }).catch(e => {
    res.status(500).json(e)
  })
})

//Get projects
// router.get('/projects/:id', isAuth, (req, res, next)=>{
//   const {id} = req.params
//   User.findById(id).populate('pets').populate('address')
//   .then(user => {
//     return res.status(200).json(user)
//   })
//   .catch(e => res.json(e))
// })

module.exports = router