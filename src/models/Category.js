/**
 * @param {import('sequelize').Sequelize} 
 * @param {import('sequelize').DataTypes} 
 */
const categorySchema = (sequelize, DataTypes) => {
    const category = sequelize.define('Category', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          name: {
            type: DataTypes.STRING
          },
        },
        {
          tableName: 'category',
          timestamps: false,
          underscored: true,
        }
    );        
    return category;
};

module.exports = categorySchema;