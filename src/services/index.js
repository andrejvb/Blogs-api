const { emailAndPassword } = require('./login.service');
const { createUser, findAllUsers, findUser } = require('./user.service');

module.exports = { emailAndPassword, createUser, findAllUsers, findUser };
