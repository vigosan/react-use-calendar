import React from 'react';
import useCalendar from '../src/index';

export default {
  title: 'useCalendar',
  component: useCalendar,
};

export const Component = () => {
  const [
    { weekdays, weeks, year, month },
    { goToPrevMonth, goToNextMonth },
  ] = useCalendar();

  return (
    <div>
      <caption>{year}</caption>
      <table>
        <thead>
          <tr>
            {weekdays.map(weekday => (
              <th key={`weekday-${weekday.shortName}`}>{weekday.shortName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map(week => (
            <tr key={`week-${week}`}>
              {week.map(day => (
                <td key={`day-${day.index}-${day.dayOfMonth}`}>
                  {day.dayOfMonth}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={goToPrevMonth}>Prev</button>
      <button onClick={goToNextMonth}>Next</button>
    </div>
  );
};

Component.story = {
  name: 'Calendar',
};
