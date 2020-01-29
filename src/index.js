import { useState } from 'react';

function useCalendar(date) {
  const [initialDate] = useState(date || new Date());
  return { year: initialDate.getFullYear() };
}

export default useCalendar;
