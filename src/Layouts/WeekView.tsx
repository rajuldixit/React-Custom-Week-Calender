import moment from 'moment';
import useFormatDates from '../Hooks/useFormatDates.hook';

export interface WeekProps {
  dates: Array<string>,
  todaysDate: string,
  weekOfYear: number,
  next(): void,
  prev(): void,
  reset(): void
}

function WeekView(props:WeekProps) {
  const days = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dates: Array<string> = props.dates;
  const [getFormatedDate] = useFormatDates()

  const formatDate = (date: string, index: number) => {
    let formatedDate = getFormatedDate(date);
    return formatedDate
  }

  const isTodaysDate = (date: string, index: number) => {
    return moment(date).isSame(moment(new Date()).format('MM/DD/YYYY'))
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="wrapper bg-white rounded shadow w-full"> 
        <div className="header flex justify-between border-b p-2">
          <span className="text-lg font-bold">
            {props.todaysDate}
          </span>
          <div className="buttons">
            <button className="p-1 mr-10" onClick={() => props.reset()}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15">
              </path>
            </svg>
            </button>
            <button className="p-1" onClick={() => props.prev()}>
              <svg
                width="1em"
                fill="gray"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-left-circle"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fillRule="evenodd"
                  d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
                />
                <path
                  fillRule="evenodd"
                  d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
                />
              </svg>
            </button>
            <button className="p-1" onClick={() => props.next()}>
              <svg
                width="1em"
                fill="gray"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-right-circle"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fillRule="evenodd"
                  d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
                />
                <path
                  fillRule="evenodd"
                  d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>
        </div>  
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    {days.map((day, index) => {
                        return <th className='p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs {(isTodaysDate(date, index)) ? "active" : ""}' key={index}>
                                <span>{day}</span>
                                </th>
                    })}
                </tr>
            </thead>
            <tbody>
                <tr className='text-center h-20'>
                    {
                        dates?.map((date, index) => {
                            return <td className={"border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease " + ((isTodaysDate(date, index)) ? "bg-pink-200 text-pink-600 font-semibold hover:bg-pink-900 hover:text-slate-200" : "text-gray-500  hover:bg-gray-300")} key={index}>
                                <span>
                                {
                                  `${formatDate(date, index)}`
                                }
                                </span>
                            </td>
                        })
                    }
                </tr>
            </tbody>
        </table>
        </div>
      </div> 
    </div> 
  )
}

export default WeekView