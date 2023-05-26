const { findEmailAndPassword } = require('./login.controller');
const { createUser, findAllUsers, findUser } = require('./user.controller');
const { createCategory, findAllCategories } = require('./category.controller');
const { newPost, findAllPost, findPostById, updatePost } = require('./post.controller');

module.exports = { 
    findEmailAndPassword, 
    createUser, 
    findAllUsers, 
    findUser, 
    createCategory,
    findAllCategories,
    newPost, 
    findAllPost,
    findPostById,
    updatePost,
};