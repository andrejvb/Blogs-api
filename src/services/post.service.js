const { BlogPost, PostCategory, User, Category } = require('../models');

const newBlogPost = async (userId, { title, content, categoryIds }) => {
    const newPost = await BlogPost.create({
        title,
        content,
        userId,      
    });
    await PostCategory.bulkCreate(categoryIds
        .map((categoryId) => ({ categoryId, postId: newPost.id })));
    return newPost;
};

const findAllPost = async () => {
    const allPosts = await BlogPost.findAll({
        include: [{ model: User, as: 'user', attributes: { exclude: 'password' } },
            { model: Category, as: 'categories', through: { attributes: [] } }] });
        return allPosts;
};

const findPostById = async (id) => {
    const posts = await BlogPost.findOne({
        where: { id },
        include: [{ model: User, as: 'user', attributes: { exclude: 'password' } },
            { model: Category, as: 'categories', through: { attributes: [] } }] });
        if (!posts) return { message: 'Post does not exist' };   
        return posts;
};

const updatePost = async (id, title, content) => {
    await BlogPost.update({ title, content }, { where: { id } });
    return findPostById(id);
};

module.exports = { newBlogPost, findAllPost, findPostById, updatePost };