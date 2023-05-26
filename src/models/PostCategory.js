/**
 * @param {import('sequelize').Sequelize} 
 * @param {import('sequelize').DataTypes} 
 */
const postCategorySchema = (sequelize, DataTypes) => {
    const postCategory = sequelize.define('PostCategory', {
        postId: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          categoryId: {
            allowNull: false,
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
        foreignKey: 'categoryId',
        as: 'blogPosts',
        through: postCategory,
      });
    
      models.BlogPost.belongsToMany(models.Category, {
        foreignKey: 'postId',
        as: 'categories',
        through: postCategory,
      });
    }
    
    return postCategory;
};

module.exports =  postCategorySchema;