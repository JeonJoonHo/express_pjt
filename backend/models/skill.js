'use strict';
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    term: DataTypes.STRING,
    proficiency: DataTypes.INTEGER,
    setType: DataTypes.INTEGER
  }, {});
  Skill.associate = function(models) {
    // associations can be defined here
  };
  return Skill;
};