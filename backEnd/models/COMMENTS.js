const {sequelize} = require('.');

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class COMMENTS extends Model {
    static associate(models) {
      this.belongsTo(models.issues, {foreignKey: 'issueIdx', targetKey: 'idx'});
      this.belongsTo(models.users, {foreignKey: 'author', targetKey: 'idx'});
    }
  }

  COMMENTS.init(
    {
      idx: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'comments',
      timestamps: false,
    },
  );
  return COMMENTS;
};
