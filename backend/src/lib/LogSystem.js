import moment from 'moment-timezone';
import Log from '../app/schema/Log';

class LogSystem {
  async processLog(schedule, text) {
    await Log.create({
      content: `${text} ${schedule.person.name} na ${moment()
        .locale('pt-br')
        .tz(process.env.TIMEZONE)
        .format('LLLL')}`,
      user: schedule.user.person.name,
      task: schedule.task.title,
    });
  }
}

export default new LogSystem();
