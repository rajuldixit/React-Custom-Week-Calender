import React from 'react'
import useWeekCalender from '../Hooks/useWeekCalender.hook'
import WeekView from '../Layouts/WeekView';

function Week() {
  const [dates, month, weekOfYear, reset, nextWeek, prevWeek] = useWeekCalender('');

  let WeekViewProps = {
    dates: dates,
    next: () => {},
    prev: () => {},
    month: '',
    weekOfTheYear: 21
  }
  WeekViewProps.next = () => {
    nextWeek();
  }
  WeekViewProps.prev = () => {
    prevWeek()
  }
  console.log(dates);
  return (
    <WeekView {...WeekViewProps}/>
  )
}

export default Week