const { Category } = require('../models');

const createCategory = async (name) => {
  try {
    const newCategory = await Category.create({ name });
    return newCategory;
  } catch (error) {
    console.error(error);   
  }
};

const findAllCategories = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};

module.exports = { createCategory, findAllCategories };