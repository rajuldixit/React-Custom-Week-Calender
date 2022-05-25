import {useState, useEffect} from 'react'
import moment from 'moment'

const useWeekCalender = (initialValue: any) => { 
  const [dates, setDates] = useState(initialValue);
  const [startDate, setStartDate] = useState(moment().startOf('week').format('MM/DD/YYYY'))
  const [endDate, setEndDate] = useState(moment().endOf('week').format('MM/DD/YYYY'))
  const reset = () => {
    setDates(initialValue)
  }
  const nextWeek = () => {
    console.log(startDate, endDate)
  }
  const prevWeek = () => {
    console.log('here prev')
  }
  const weekCount = moment().isoWeek()
  const month = moment().format('MMM')

  const enumerateDaysBetweenDates = (startDate: string, endDate: string) => {
    let date = []
    while(moment(startDate) <= moment(endDate)){
      date.push(startDate);
      startDate = moment(startDate).add(1, 'days').format("MM/DD/YYYY");
    }
    setDates(date);
  }
  useEffect(()=> {
    enumerateDaysBetweenDates(startDate, endDate);
  }, [startDate, endDate]);
  return [dates, month, weekCount, reset, nextWeek, prevWeek] 
}

export default useWeekCalender
