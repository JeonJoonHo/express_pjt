import SkillService from "../../services/skill";

var express = require('express');
var router = express.Router();
const { Skill } = require('../../models')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  // Skill.findAll().then(function (results) {
  //   res.json(results);
  // }).catch(function (err) {
  //   console.error(err);
  // })
  const skillService = new SkillService()
  const skills = await skillService.getSkills()
  res.json(skills)
});

module.exports = router;
