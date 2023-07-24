import React from 'react'
import Button from 'src/components/UI/Button';
import styles from '../../../../styles/mainContent/indexColumns/appointment/Appointment.css'

const AppointmentItem = ({ info, itemData, ...rest }) => {
  return(
    <p class="appointment-item">
      <label for={ info }>{ itemData }</label>
      <input id={ info } { ...rest }/>
    </p>
  )
}

function Appointment() {
  return (
    <section className='appointment'>
      <h2>Записаться</h2>
      <p className='appointment-info'>
        Укажите желаемую дату и время и мы свяжемся
        с Вами для подтверждения брони
      </p>
      <form className="appointment-form" action="#" method="post">
          <AppointmentItem info="appointment-date" itemData="Дата" type="text" name="date" value="" placeholder="08.10.2017"/>
          <AppointmentItem info="appointment-time" itemData="Время" type="text" name="time" value="" placeholder="10:00"/>
          <AppointmentItem info="appointment-name" itemData="Название услуги" type="text" name="name" value="" placeholder="Борода"/>
          <AppointmentItem info="appointment-phone" itemData="Номер телефона" type="tel" name="phone" placeholder="+ 38 093 456-78-90"/>
          <Button type="submit">Отправить</Button>
			</form>
    </section>
  )
}

export default Appointment;