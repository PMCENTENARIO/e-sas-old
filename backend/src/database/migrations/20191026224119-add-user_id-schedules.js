module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('schedules', 'user_id', {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      allowNull: true,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('schedules', 'user_id');
  },
};
