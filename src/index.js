import { useState } from 'react';
import { addMonth, subMonth, getMonthByIndex, getWeekdays } from './utils';

function useCalendar(startDate) {
  const [date, setDate] = useState(startDate || new Date());

  const monthIndex = date.getMonth();
  const month = getMonthByIndex(monthIndex);
  const year = date.getFullYear();
  const weekdays = getWeekdays();
  const goToNextMonth = () => setDate(addMonth(date));
  const goToPrevMonth = () => setDate(subMonth(date));

  return [
    {
      month,
      year,
      weekdays,
    },
    { goToNextMonth, goToPrevMonth },
  ];
}

export default useCalendar;
