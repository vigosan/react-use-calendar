import React from 'react';
import useCalendar from '../src/index';

export default {
  title: 'useCalendar',
  component: useCalendar,
};

export const Component = () => {
  const [{ weekdays, weeks }, { goToPrevMonth, goToNextMonth }] = useCalendar();

  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(weekdays).map(weekday => (
              <th key={`weekday-${weekday}`}>{weekdays[weekday].shortName}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Object.keys(weeks).map(week => {
            return (
              <tr key={`week-${week}`}>
                {weeks[week].map(day => {
                  return (
                    <td key={`day-${day.index}-${day.dayOfMonth}`}>
                      {day.dayOfMonth}
                    </td>
                  );
                })}
              </tr>
            );
          })}
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
