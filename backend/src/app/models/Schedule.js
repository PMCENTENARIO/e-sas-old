import Sequelize, { Model } from 'sequelize';

class Schedule extends Model {
  static init(sequelize) {
    super.init(
      {
        message: Sequelize.STRING,
        protocol: Sequelize.STRING,
        apply: Sequelize.BOOLEAN,
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
    this.belongsTo(models.Address, {
      foreignKey: 'address_id',
      as: 'address',
    });
    this.belongsTo(models.Task, {
      foreignKey: 'task_id',
      as: 'task',
    });
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }
}
export default Schedule;
