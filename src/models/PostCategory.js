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
        foreignKey: 'id',
        as: 'blogPosts',
        through: postCategory,
        otherKey: 'category_id'
      });
    
      models.BlogPost.belongsToMany(models.Category, {
        foreignKey: 'id',
        as: 'categories',
        through: postCategory,
        otherKey: 'post_id'
      });
    }
    
    return postCategory;
};

module.exports =  postCategorySchema;