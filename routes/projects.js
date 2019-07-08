const router = require('express').Router()
const Project = require('../models/Project')

const isAuth = (req, res, next) => {
  if(req.isAuthenticated()) return next()
  return res.status(401).json({message:'No pasas perro'})
}

// Get all projects by organization
router.get('/org/:id', (req, res, next)=>{
  const { id } = req.params
  Project.find({user:id})
  .then(projects => {
    return res.status(200).json(projects)
  })
  .catch(e => res.status(404).json(e))
})

// Get all projects
router.get('/', (req, res, next)=>{
  Project.find()
  .then(projects => {
    return res.status(200).json(projects)
  })
  .catch(e => res.json(e))
})

// Get a specific project
router.get('/:id', (req, res, next)=>{
  const { id } = req.params
  Project.findById(id).populate('user')
  .then(project => {
    return res.status(200).json(project)
  })
  .catch(e => res.json(e))
})

//Add project
router.post('/new', (req, res, next) => {
  Project.create(req.body)
  .then(project => {
    res.status(201).json(project)
  }).catch(e => {
    res.status(500).json(e)
  })
})

// Update project
router.put('/:id', isAuth, (req,res,next) => {
  const { id } = req.params
  Project.findByIdAndUpdate(id, {$set: req.body})
  .then( project => res.status(204).json(project))
  .catch(e => res.status(500).json(e))
})

// Delete project
router.delete('/:id', isAuth, (req,res,next) => {
  const { id } = req.params
  Project.findByIdAndUpdate(id, {$set: {status: 'Deleted'}})
  .then( project => res.status(204).json(project))
  .catch(e => res.status(500).json(e))
})


module.exports = router