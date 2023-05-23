/**
 * @param {import('sequelize').Sequelize} 
 * @param {import('sequelize').DataTypes} 
 */
const postCategorySchema = (sequelize, DataTypes) => {
    const postCategory = sequelize.define('PostCategory', {
        postId: {
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          categoryId: {
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
        },
        {
          tableName: 'posts_categories',
          timestamps: false,
          underscored: true,
        }
    ); 

    postCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
        foreignKey: 'postId',
        as: 'blogPosts',
        through: postCategory,
        otherKey: 'categoryId'
      });
    
      models.BlogPost.belongsToMany(models.Category, {
        foreignKey: 'categoryId',
        as: 'categories',
        through: postCategory,
        otherKey: 'postId'
      });
    }
    
    return postCategory;
};

module.exports =  postCategorySchema;