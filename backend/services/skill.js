const { Skill } = require('../models')

const Container = require("typedi").Container

export default class SkillService {
    constructor() {
        this.skillModel = Skill
    }

    async getSkills() {
        return await Skill.findAll().map(result => result.get('defaultInfo'))
    }
}