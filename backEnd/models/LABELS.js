const {sequelize} = require('.');

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class LABELS extends Model {
    static associate(models) {
      this.belongsToMany(models.issues, {through: 'issueLabel'});
    }
  }
  LABELS.init(
    {
      idx: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'labels',
    },
  );
  return LABELS;
};
