import moment from 'moment-timezone';
import Log from '../schema/Log';

class LogSystem {
  get key() {
    return 'LogSystem';
  }

  async handle({ data }) {
    const { schedule, content, user } = data;

    await Log.create({
      application: `${process.env.APP_NAME}/${process.env.COMPANY}`,
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
