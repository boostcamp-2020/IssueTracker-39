const {sequelize} = require('.');

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ISSUES extends Model {
    static associate(models) {
      this.belongsTo(models.users, {foreignKey: 'author', targetKey: 'idx'});
      this.belongsTo(models.milestones, {
        foreignKey: 'milestoneIdx',
        targetKey: 'idx',
      });
      this.belongsToMany(models.users, {
        through: 'assignees',
        timestamps: false,
      });
      this.belongsToMany(models.labels, {
        through: 'issueLabel',
        timestamps: false,
      });
      this.hasMany(models.comments, {foreignKey: 'issueIdx', sourceKey: 'idx'});
    }
  }
  ISSUES.init(
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
      content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      createdTime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      closedTime: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'issues',
      timestamps: false,
    },
  );
  return ISSUES;
};
