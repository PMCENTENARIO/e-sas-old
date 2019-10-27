import Sequelize, { Model } from 'sequelize';

class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  // Associação de modulos passando config -> belongsToMany associando os campos
  static associate(models) {
    this.belongsToMany(models.Person, {
      foreignKey: 'task_id',
      through: 'schedules',
      as: 'personsTask',
    });
  }
}
export default Task;
