import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import User from '../app/models/User';
import Person from '../app/models/Person';
import Task from '../app/models/Task';
import Address from '../app/models/Address';
import Schedule from '../app/models/Schedule';
import File from '../app/models/File';

const models = [User, File, Person, Task, Address, Schedule];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
    // percorre as function static associando dos models
  }
}

export default new Database();
