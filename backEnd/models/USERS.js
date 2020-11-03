const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class USERS extends Model {
    static associate(models) {
      this.hasMany(models.issues, {
        foreignKey: 'author',
        sourceKey: 'idx',
        as: 'issuesAuthor',
      });
      this.belongsToMany(models.issues, {
        through: 'assignees',
        timestamps: false,
        as: 'issueAssigned',
      });
      this.hasMany(models.comments, {foreignKey: 'author', sourceKey: 'idx'});
    }
  }
  USERS.init(
    {
      idx: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      userPw: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'users',
      timestamps: false,
    },
  );
  return USERS;
};
