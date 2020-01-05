import moment from 'moment-timezone';
import Log from '../app/schema/Log';

class LogSystem {
  async scheduleLog(schedule, text) {
    await Log.create({
      application: `${process.env.APP_NAME}/${process.env.COMPANY}`,
      content: `${text} ${schedule.person.name} na ${moment()
        .locale('pt-br')
        .tz(process.env.TIMEZONE)
        .format('LLLL')}`,
      user: schedule.user.person.name,
      task: schedule.task.title,
    });
  }

  async processLog(task, text, user) {
    await Log.create({
      application: `${process.env.APP_NAME}/${process.env.COMPANY}`,
      content: `${text} na ${moment()
        .locale('pt-br')
        .tz(process.env.TIMEZONE)
        .format('LLLL')}`,
      user,
      task,
    });
  }
}

export default new LogSystem();
