import useWeekCalender from '../Hooks/useWeekCalender.hook'
import WeekView from '../Layouts/WeekView';

function Week() {
  const [dates, month, weekOfYear, reset, nextWeek, prevWeek] = useWeekCalender('');

  let WeekViewProps = {
    dates: dates,
    next: () => {},
    prev: () => {},
    month: month,
    weekOfTheYear: 21,
    reset: reset,
    weekOfYear: weekOfYear
  }
  WeekViewProps.next = () => {
    nextWeek();
  }
  WeekViewProps.prev = () => {
    prevWeek()
  }
  return (
    <WeekView {...WeekViewProps}/>
  )
}

export default Week