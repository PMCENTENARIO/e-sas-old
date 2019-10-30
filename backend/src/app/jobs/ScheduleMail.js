import moment from 'moment-timezone';
import Mail from '../../lib/Mail';

require('dotenv').config();

class ScheduleMail {
  get key() {
    return 'ScheduleMail';
  }

  async handle({ data }) {
    const {
      schedule,
      date,
      street,
      number,
      district,
      zip_code,
      message,
      collaboratorPerson,
    } = data;

    await Mail.sendMail({
      to: `${collaboratorPerson.person.name} <${collaboratorPerson.email}>`,
      subject: `${process.env.APP_NAME} notificação: Agendamento de novo serviço`,
      template: 'schedule',
      context: {
        provider: collaboratorPerson.person.name,
        protocol: schedule.protocol,
        date: moment(date)
          .locale('pt-br')
          .tz(process.env.TIMEZONE)
          .format('DD/MM/YYYY'),
        person: schedule.person.name,
        task: schedule.task.title,
        address: `${street}, ${number} - ${district} CEP: ${zip_code}`,
        message,
      },
    });
  }
}

export default new ScheduleMail();
