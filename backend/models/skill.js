'use strict';
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    term: DataTypes.STRING,
    proficiency: DataTypes.INTEGER,
    type: {
      type: DataTypes.INTEGER,
      get: function () {
        const rawValue = this.getDataValue("type")
        switch (rawValue) {
          case types.BACKEND:
            return 'backend'
          case types.FRONTEND:
            return 'fronted'
          case types.ETC:
            return 'etc'
        }
      }
    }

  }, {
    getterMethods: {
      defaultInfo() {
        return {
          term: this.term,
          proficiency: this.proficiency,
          type: this.type
        }
      }
    }
  });
  const types = {
    BACKEND: 1,
    FRONTEND: 2,
    ETC: 3
  }
  Skill.associate = function(models) {
    // associations can be defined here
  };
  Skill.groupByType = async function (skills) {
    return skills.reduce(function(rv, x) {
      if (rv[x.getDataValue("type")] === undefined) {
        rv[x.getDataValue("type")] = {
          title: x.type,
          skills: []
        }
      }

      rv[x.getDataValue("type")]['skills'].push(x.get('defaultInfo'));
      // (rv[x.getDataValue("type")][skills] = rv[x.getDataValue("type")][skills] || []).push(x);
      return rv;
    }, {});
  }
  return Skill;
};