import { useState } from 'react';
import { getMonthByIndex, getWeekdays } from './utils';

function useCalendar(date) {
  const [initialDate] = useState(date || new Date());

  const monthIndex = initialDate.getMonth();
  const month = getMonthByIndex(monthIndex);
  const year = initialDate.getFullYear();
  const weekdays = getWeekdays();

  return {
    month,
    year,
    weekdays,
  };
}

export default useCalendar;
