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
      <caption>{`${month.name} ${year}`}</caption>
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
            <tr key={`week-${week}`} style={{ border: 0 }}>
              {week.map(day => (
                <td
                  key={`day-${day.index}-${day.dayOfMonth}`}
                  style={{
                    border: '0',
                    ...(day.isToday && {
                      backgroundColor: '#FC8181',
                      borderRadius: '75px',
                    }),
                    ...(day.isSameMonth &&
                      day.isWeekend && {
                        backgroundColor: '#CBD5E0',
                      }),
                    ...(!day.isSameMonth && {
                      color: '#CBD5E0',
                    }),
                  }}
                >
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
