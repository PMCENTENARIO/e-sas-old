import moment from 'moment-timezone';
import Mail from '../../lib/Mail';

class ScheduleMail {
  get key() {
    return 'CanceledScheduleMail';
  }

  async handle({ data }) {
    const { schedule, collaboratorPerson } = data;

    await Mail.sendMail({
      to: `${collaboratorPerson.person.name} <${collaboratorPerson.email}>`,
      subject: `${process.env.APP_NAME} notificação: Cancelamento de agendamento de serviço`,
      template: 'canceledSchedule',
      context: {
        provider: collaboratorPerson.person.name,
        protocol: schedule.protocol,
        date: moment(schedule.date)
          .locale('pt-br')
          .tz(process.env.TIMEZONE)
          .format('DD/MM/YYYY'),
        dateCanceled: moment()
          .locale('pt-br')
          .tz(process.env.TIMEZONE)
          .format('LLLL'),
        person: schedule.person.name,
        task: schedule.task.title,
        address: `${schedule.address.street}, ${schedule.address.number} - ${schedule.address.district} CEP: ${schedule.address.zip_code}`,
        message: schedule.message,
      },
    });
  }
}

export default new ScheduleMail();
