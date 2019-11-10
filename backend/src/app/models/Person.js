import Sequelize, { Model } from 'sequelize';

class Person extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        phone: Sequelize.STRING,
        document: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  // Associação de modulos passando config -> hasOne associando os campos
  static associate(models) {
    this.hasOne(models.User, { foreignKey: 'person_id', as: 'person' });
    this.belongsToMany(models.Task, {
      foreignKey: 'person_id',
      through: 'schedules',
      as: 'tasks',
    });
    this.belongsToMany(models.Address, {
      foreignKey: 'person_id',
      through: 'schedules',
      as: 'addresses',
    });
  }
}
export default Person;
