const { findEmailAndPassword } = require('./login.controller');
const { createUser, findAllUsers, findUser } = require('./user.controller');
const { createCategory } = require('./category.controller');

module.exports = { findEmailAndPassword, createUser, findAllUsers, findUser, createCategory };