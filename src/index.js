import { useState } from 'react';
import { addMonth, getMonthByIndex, getWeekdays } from './utils';

function useCalendar(startDate) {
  const [date, setDate] = useState(startDate || new Date());

  const monthIndex = date.getMonth();
  const month = getMonthByIndex(monthIndex);
  const year = date.getFullYear();
  const weekdays = getWeekdays();
  const goToNextMonth = () => setDate(addMonth(date));

  return [
    {
      month,
      year,
      weekdays,
    },
    { goToNextMonth },
  ];
}

export default useCalendar;
