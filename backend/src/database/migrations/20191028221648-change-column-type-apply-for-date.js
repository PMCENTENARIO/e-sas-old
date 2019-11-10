module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('schedules', 'apply', {
      type: Sequelize.DATE,
      allowNull: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('schedules', 'apply', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
  },
};
