import React, { Component } from 'react'
import moment from 'moment'

function DateTimePretty(View) {
    return class extends Component {
      render() {      
        const m = moment(this.props.date).format();
        const m2 = moment();
        let outDate = '';
  
        const m3 = {
          day: m2.diff(m, 'd'),
          watch: m2.diff(m, 'H'),
          minutes: m2.diff(m, 'm')
        }

        
  
        if(m3.minutes < 60){
            console.log(m3.minutes)
          if (m3.minutes !==11 && m3.minutes.toString().slice(-1) === '1') {
            outDate = `${m3.minutes} минуту назад`;
          } else if (m3.minutes < 5 && m3.minutes.toString().slice(-1) > 0)  {
            outDate = `${m3.minutes} минуты назад`;
          } else if (m3.minutes > 20 && m3.minutes.toString().slice(-1) > 1 && m3.minutes.toString().slice(-1) < 5)  {
            outDate = `${m3.minutes} минуты назад`;
          } else {
            outDate = `${m3.minutes} минут назад`;
          }
        }            
  
        else if (m3.watch < 24  ) {
          if (m3.watch.toString().slice(-1) === '1') {
            outDate = `${m3.watch} час назад`;
          } else if (m3.watch.toString().slice(-1) < 5 && m3.watch.toString().slice(-1) > 0)  {
            outDate = `${m3.watch} часа назад`;
          } else {
            outDate = `${m3.watch} часов назад`;
          }
        }        
  
        else {
          if (m3.day.toString().slice(-1) === '1') {          
            outDate = `${m3.day} день назад`;
          } else if (m3.day.toString().slice(-1) < 5 
          && m3.day.toString().slice(-1) > 1 
          && m3.day.toString().slice(-2, -1) !== '1' )  {
            outDate = `${m3.day} дня назад`;
          } else {
            outDate = `${m3.day} дней назад`;
          }
        }    
  
        return <View {...this.props} date={outDate} />;
      }
    }
  }


  export default DateTimePretty;