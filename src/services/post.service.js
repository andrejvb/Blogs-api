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
        include: [
            { 
                model: User, 
                as: 'user', 
                attributes: { exclude: 'password' },
            },
            { 
                model: Category, 
                as: 'categories', 
                through: { attributes: [] },
            },
        ],
    });
        
    return posts;
};

const updatePost = async (id, title, content) => {
    await BlogPost.update({ title, content }, { where: { id } });
    return findPostById(id);
};

// const deletePost = async (id) => BlogPost.destroy({ where: { id } });

const deletePost = async (postId) => {
  await BlogPost.destroy({
    where: { id: postId },
  });
  return { type: null, message: '' };
};

const deleteUser = async (id) => {
    await User.destroy({
        where: { id },
      });
    return { type: null, message: '' };
};

module.exports = { 
    newBlogPost, 
    findAllPost, 
    findPostById, 
    updatePost, 
    deletePost,
    deleteUser, 
};