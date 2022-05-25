import React from 'react'

function WeekView(props:any) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const dates: Array<string> = props.dates;
  console.log(dates)
  return (
    <div>
        <table>
            <thead>
                <tr>
                    {days.map((day, index) => {
                        return <td key={index}>{day}</td>
                    })}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* {
                        dates?.map((date, index) => {
                            return <td key={index}>{date}</td>
                        })
                    } */}
                </tr>
            </tbody>
        </table>
        <div>
            <button onClick={() => props.prev()}>Prev</button>
            <button onClick={() => props.next()}>Next</button>
        </div>
    </div>
  )
}

export default WeekView