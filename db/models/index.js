'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Mission = require('./mission')
const Challenge = require('./challenge')

User.belongsToMany(Mission, {through: 'UserMissions'})
Mission.belongsToMany(User, {through: 'UserMissions'})
User.belongsToMany(Challenge, {through: 'UserChallenges'})
Challenge.belongsToMany(User, {through: 'UserChallenges'})
Mission.belongsToMany(Challenge, {through: 'MissionChallenges'})
Challenge.belongsToMany(Mission, {through: 'MissionChallenges'})

module.exports = {User}
