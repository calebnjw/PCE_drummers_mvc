const initDrummerModel = (sequelize, DataTypes) => {
  return sequelize.define(
    'drummer',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      // created_at and updated_at are required
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      price: {
        type: DataTypes.INTEGER,
      },
    },
    {
      underscored: true,
    },
  );
}

module.exports = initDrummerModel;