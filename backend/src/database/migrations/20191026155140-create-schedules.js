module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('schedules', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      person_id: {
        type: Sequelize.INTEGER,
        references: { model: 'people', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      address_id: {
        type: Sequelize.INTEGER,
        references: { model: 'addresses', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      task_id: {
        type: Sequelize.INTEGER,
        references: { model: 'tasks', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      message: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      protocol: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      apply: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('schedules');
  },
};
