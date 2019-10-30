import moment from 'moment-timezone';
import Log from '../schema/Log';

require('dotenv').config();

class LogSystem {
  get key() {
    return 'LogSystem';
  }

  async handle({ data }) {
    const { schedule, content, user } = data;

    await Log.create({
      content: `${content} ${schedule.person.name} na ${moment()
        .locale('pt-br')
        .tz(process.env.TIMEZONE)
        .format('LLLL')}`,
      user,
      task: schedule.task.id,
    });
  }
}

export default new LogSystem();
