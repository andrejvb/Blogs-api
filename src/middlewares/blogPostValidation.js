const services = require('../services');

const blogPostValidation = async (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const categories = await services.findAllCategories();
    const categoryId = categories.map((category) => category.id);
    const allCategories = categoryId.every((id) => categoryIds.includes(id));
    if (!allCategories) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    next();
  };

module.exports = { blogPostValidation };  