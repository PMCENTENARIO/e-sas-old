import Sequelize, { Model } from 'sequelize';

class Schedule extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        protocol: Sequelize.STRING,
        message: Sequelize.STRING,
        bucket: Sequelize.STRING,
        apply: Sequelize.BOOLEAN,
        canceled_at: Sequelize.DATE,
        /* collaborator: {
          type: Sequelize.VIRTUAL,
          get() {
            return 'Collaborator';
          },
        }, */
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Person, {
      foreignKey: 'person_id',
      as: 'person',
    });
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
    this.belongsTo(models.Address, {
      foreignKey: 'address_id',
      as: 'address',
    });
    this.belongsTo(models.Task, {
      foreignKey: 'task_id',
      as: 'task',
    });
  }
}
export default Schedule;
