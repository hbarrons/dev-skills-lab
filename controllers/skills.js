import * as skillsDb from '../data/skills-db.js'

function index(req, res) {
  skillsDb.find({}, function(error, skills) {
    res.render('skills/index.ejs', {
      skills: skills,
      error: error
    })
  })
}

function show(req, res) {
  skillsDb.findById(req.params.id, function(error, skill){
    res.render('skills/show', {
      skill: skill,
      error: error
    })
  })
}

function newSkill(req,res){
  res.render('skills/new.ejs')
}

function create(req, res) {
  skillsDb.create(req.body, function(error, todo){
    res.redirect('/skills')
  })
}

function deleteSkill(req, res) {
  skillsDb.findByIdAndDelete(req.params.id, function(error, skill){
    res.redirect('/skills')
  })
}

export {
  index,
  show,
  newSkill as new,
  create,
  deleteSkill as delete,
}