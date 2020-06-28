const { Skill } = require('../models')

const Container = require("typedi").Container

export default class SkillService {
    constructor() {
        this.skillModel = Skill
    }

    async getSkills() {
        const skills = await this.skillModel.findAll().map(result => result)
        const skillGroupByType = this.skillModel.groupByType(skills)

        console.log(this.skillModel.types)

        return skillGroupByType
    }
}