const { BlogPost, PostCategory } = require('../models');

const newBlogPost = async (userId, { title, content, categoryIds }) => {
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