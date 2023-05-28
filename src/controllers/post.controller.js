const services = require('../services');
const { validateToken } = require('../auth/JWT');

const newPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { authorization: token } = req.headers;
    const data = validateToken(token);
    console.log('LOG DO CONTROLER ID', data);
    const userId = data.user.id;
    const post = await services.newBlogPost(userId, { title, content, categoryIds });
    return res.status(201).json(post.dataValues);
  } catch (error) {
    console.log(error);
  }  
};

const findAllPost = async (req, res) => {
  const allPosts = await services.findAllPost();
  return res.status(200).json(allPosts);
};

const findPostById = async (req, res) => {
  const { id } = req.params;
  const post = await services.findPostById(id);  
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const postUpdate = await services.updatePost(Number(id), title, content);
  return res.status(200).json(postUpdate);
};

const deletePost = async (req, res) => {  
  const { id } = req.params;
  const { type, message } = await services.deletePost(Number(id));
  if (type) return res.status(type).json({ message });
  return res.status(204).end();
};

const deleteUser = async (req, res) => {
  const { authorization: token } = req.headers;
  const data = validateToken(token);
  
  const { id } = data.user;
  await services.deleteUser(id);
  return res.status(204).end();
};

  module.exports = { 
    newPost, 
    findAllPost, 
    findPostById, 
    updatePost, 
    deletePost,
    deleteUser, 
  };