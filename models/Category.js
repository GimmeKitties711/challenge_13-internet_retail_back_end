const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // if any category besides the last one is deleted, the ids of the rest of the categories will not be reassigned. for example, [1, 2, 4, 5] will not become [1, 2, 3, 4], and the next category created will have an id of 6.
      // source for how to build models using autoIncrement: https://sequelize.org/docs/v6/core-concepts/model-basics/
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true, // this prevents the table name from being the plural of Category, source: https://sequelize.org/docs/v7/models/naming-strategies/
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
