import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        profile: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    // Hashes the password before saving to database
    this.addHook('beforeSave', async user => {
      if (user.password)
        user.password_hash = await bcrypt.hash(user.password, 8);
    });
    return this;
  }

  // Associação de modulos passando config -> belongsTo associando os campos
  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
    this.belongsTo(models.Person, { foreignKey: 'person_id', as: 'person' });
    this.hasMany(models.Schedule, { foreignKey: 'user_id', as: 'user' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}
export default User;
