const { Skill } = require('../models')

const Container = require("typedi").Container

export default class SkillService {
    constructor() {
        this.skillModel = Skill
    }

    async getSkills() {
        let skills = await this.skillModel.findAll().map(result => result.get('defaultInfo'))
        return Skill.groupByType(skills)
    }
}