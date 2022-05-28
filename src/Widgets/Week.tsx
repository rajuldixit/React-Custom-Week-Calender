import moment from 'moment';
import useWeekCalender from '../Hooks/useWeekCalender.hook'
import WeekView from '../Layouts/WeekView';

function Week() {
  let initialState = {
    startDate: moment().startOf('week').format('MM/DD/YYYY'),
    endDate: moment().endOf('week').format('MM/DD/YYYY')
  }
  const [dates, todaysDate, weekOfYear,setNextWeekDates, setPrevWeekDates, resetCalender] = useWeekCalender(initialState);

  let WeekViewProps = {
    dates: dates,
    todaysDate: todaysDate,
    weekOfYear: weekOfYear,
    next: () => {},
    prev: () => {},
    reset: () => {}
  }
  
  WeekViewProps.next = () => {
    setNextWeekDates()
  }
  WeekViewProps.prev = () => {
    setPrevWeekDates()
  }

  WeekViewProps.reset = () => {
    resetCalender()
  }

  return (
    <WeekView {...WeekViewProps}/>
  )
}

export default Week