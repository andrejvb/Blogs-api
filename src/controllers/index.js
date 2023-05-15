const { findEmailAndPassword } = require('./login.controller');
const { createUser, findAllUsers, findUser } = require('./user.controller');

module.exports = { findEmailAndPassword, createUser, findAllUsers, findUser };