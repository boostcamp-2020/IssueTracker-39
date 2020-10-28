const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MILESTONES extends Model {
    static associate(models) {
      this.hasMany(models.issues, {
        foreignKey: 'milestoneIdx',
        sourceKey: 'idx',
      });
    }
  }
  MILESTONES.init(
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
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      dueDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'milestones',
      timestamps: false,
    },
  );
  return MILESTONES;
};
