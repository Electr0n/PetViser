
module.exports = (sequelize, DataTypes) => {
  const Entity = sequelize.define('entity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.TINYINT
    },
    about: {
      type: DataTypes.TEXT
    }
  }, {
    timestamps: false
  });

  return Entity;
};
