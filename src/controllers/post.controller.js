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

module.exports = { newPost, findAllPost };