const services = require('../services');

const createCategory = async (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    const newCategory = await services.createCategory(name);
    return res.status(201).json(newCategory);
};

const findAllCategories = async (_req, res) => {
    const allCategories = await services.findAllCategories();
    return res.status(200).json(allCategories);
  };

module.exports = { createCategory, findAllCategories };