const { emailAndPassword } = require('./login.service');
const { createUser, findAllUsers } = require('./user.service');

module.exports = { emailAndPassword, createUser, findAllUsers };
