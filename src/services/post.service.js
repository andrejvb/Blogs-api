const jwt = require('jsonwebtoken');
const { BlogPost, PostCategory } = require('../models');

const secret = process.env.JWT_SECRET;

const newBlogPost = async (token, { title, content, categoryIds }) => {
    const data = jwt.verify(token, secret);
    console.log('log do data do service', data.user.data);
    const userId = data.user.data.id;    
    const newPost = await BlogPost.create({
        title,
        content,
        userId,      
    });
    categoryIds.forEach(async (categoryId) => {
        await PostCategory.create({ categoryId, postId: newPost.id });
    });
    return newPost;
};

module.exports = { newBlogPost };