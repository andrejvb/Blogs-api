/**
 * @param {import('sequelize').Sequelize} 
 * @param {import('sequelize').DataTypes} 
 */
const blogPostSchema = (sequelize, DataTypes) => {
    const blogPost = sequelize.define('BlogPost', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          userId: {
            type: DataTypes.INTEGER,
            references: { model: 'User', key: 'id'}
          },
          title: {
            type: DataTypes.STRING
          },
          content: {
            type: DataTypes.STRING
          },
          published: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
          },
          updated: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
          },
        },
        {
          tableName: 'blog_posts',
          timestamps: false,
          underscored: true,
        }
    ); 

    blogPost.associate = (models) => {
      blogPost.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'users',
      });
    }
    
    return blogPost;
};

module.exports = blogPostSchema;