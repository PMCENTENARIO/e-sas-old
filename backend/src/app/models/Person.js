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
  }
}
export default Person;
