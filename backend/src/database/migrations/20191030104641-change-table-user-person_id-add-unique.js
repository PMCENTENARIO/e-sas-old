module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'person_id', {
      type: Sequelize.INTEGER,
      references: { model: 'people', key: 'id' },
      allowNull: true,
      unique: true,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'person_id', {
      type: Sequelize.INTEGER,
      references: { model: 'people', key: 'id' },
      allowNull: true,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },
};
