module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('schedules', 'bucket', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('schedules', 'bucket');
  },
};
