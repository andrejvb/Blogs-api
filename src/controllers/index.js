const { findEmailAndPassword } = require('./login.controller');
const { createUser, findAllUsers } = require('./user.controller');

module.exports = { findEmailAndPassword, createUser, findAllUsers };