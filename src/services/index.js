const { emailAndPassword } = require('./login.service');
const { createUser, findAllUsers, findUser } = require('./user.service');
const { createCategory, findAllCategories } = require('./category.service');

module.exports = { 
    emailAndPassword, 
    createUser, 
    findAllUsers, 
    findUser, 
    createCategory,
    findAllCategories, 
};
