import { useState } from 'react';
import { months, monthsShort } from './utils';

function useCalendar(date) {
  const [initialDate] = useState(date || new Date());
  const monthIndex = initialDate.getMonth();

  return {
    month: {
      index: monthIndex,
      name: months[monthIndex],
      shortName: monthsShort[monthIndex],
    },
    year: initialDate.getFullYear(),
  };
}

export default useCalendar;
