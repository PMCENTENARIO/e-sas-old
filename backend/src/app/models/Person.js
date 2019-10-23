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
        freezeTableName: false,
        sequelize,
      }
    );
    return this;
  }

  // Associação de modulos passando config -> belongsTo associando os campos
  static associate(models) {
    this.belongsTo(models.Person, { foreignKey: 'id' });
  }
}
export default Person;
