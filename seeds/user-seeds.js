const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'jakethesnake',
    email: 'rattler@googoo.com',
    password: 'password123'
  },
  {
    username: 'slytheryn',
    email: 'draco@malfoy.com',
    password: 'password123'
  },
  {
    username: 'serpentinebelt',
    email: 'cartrubs@yahoo.com',
    password: 'password123'
  },
  {
    username: 'auryn',
    email: 'snakebite@hotmail.com',
    password: 'password123'
  },
  {
    username: 'diamondbackjack',
    email: 'sidewinder@thebomb.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;