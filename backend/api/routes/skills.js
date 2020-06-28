import SkillService from "../../services/skill";

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const skillService = new SkillService()
  const skills = await skillService.getSkills()
  res.json({ skills: skills })
});

module.exports = router;
