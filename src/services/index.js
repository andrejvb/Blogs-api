const { emailAndPassword } = require('./login.service');
const { 
    createUser, 
    findAllUsers, 
    findUser, 
    getByEmailAndPassword, 
    findUserByEmail, 
} = require('./user.service');
const { createCategory, findAllCategories } = require('./category.service');
const { newBlogPost, findAllPost, findPostById, updatePost } = require('./post.service');

module.exports = { 
    emailAndPassword, 
    createUser, 
    findAllUsers, 
    findUser, 
    createCategory,
    findAllCategories,
    newBlogPost, 
    getByEmailAndPassword,
    findUserByEmail,
    findAllPost,
    findPostById,
    updatePost,
};
