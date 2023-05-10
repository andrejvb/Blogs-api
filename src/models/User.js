/**
 * @param {import('sequelize').Sequelize} 
 * @param {import('sequelize').DataTypes} 
 */
const userSchema = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          displayName: {
            type: DataTypes.STRING
          },
          email: {
            type: DataTypes.STRING
          },
          password: {
            type: DataTypes.STRING
          },
          image: {
            type: DataTypes.STRING
          },
        },
        {
          tableName: 'users',
          timestamps: false,
          underscored: true,
        }
    );        
    return user;
};

module.exports = userSchema;