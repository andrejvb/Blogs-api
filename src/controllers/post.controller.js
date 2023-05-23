const services = require('../services');

const newPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { authorization: token } = req.headers;
      const post = await services.newBlogPost(token, { title, content, categoryIds });
    return res.status(201).json(post.dataValues);
  } catch (error) {
    console.log(error);
  }  
};

module.exports = { newPost };