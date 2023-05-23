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

    postCategorySchema.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: postCategorySchema,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
  
      models.Category.belongsToMany(models.BlogPost, {
        as: 'posts',
        through: postCategorySchema,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
    };
    
    
    return postCategory;
};

module.exports =  postCategorySchema;