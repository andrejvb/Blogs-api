const { BlogPost, PostCategory, User, Category } = require('../models');

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

const findAllPost = async () => {
    const allPosts = await BlogPost.findAll({
        include: [{ model: User, as: 'user', attributes: { exclude: 'password' } },
            { model: Category, as: 'categories', through: { attributes: [] } }] });
        return allPosts;
};

module.exports = { newBlogPost, findAllPost };