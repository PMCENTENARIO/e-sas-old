import Sequelize, { Model } from 'sequelize';

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        zip_code: Sequelize.STRING,
        street: Sequelize.STRING,
        number: Sequelize.INTEGER,
        district: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  // Associação de modulos passando config -> hasMany associando os campos
  static associate(models) {
    this.belongsToMany(models.Person, {
      foreignKey: 'address_id',
      through: 'schudules',
      as: 'personsAddress',
    });
  }
}
export default Address;
