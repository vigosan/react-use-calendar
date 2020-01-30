import { useReducer } from 'react';
import {
  addMonth,
  getMonth,
  getWeekdays,
  getWeeks,
  getYear,
  subMonth,
} from './utils';
import * as actionTypes from './actionTypes';

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.GO_TO_NEXT_MONTH:
      return { ...state, date: addMonth(state.date) };
    case actionTypes.GO_TO_PREV_MONTH:
      return { ...state, date: subMonth(state.date) };
  }
}

function useCalendar(startDate) {
  const [{ date }, dispatch] = useReducer(reducer, {
    date: startDate || new Date(),
  });

  const month = getMonth(date);
  const weekdays = getWeekdays();
  const weeks = getWeeks(date);
  const year = getYear(date);
  const goToNextMonth = () => dispatch({ type: actionTypes.GO_TO_NEXT_MONTH });
  const goToPrevMonth = () => dispatch({ type: actionTypes.GO_TO_PREV_MONTH });

  return [
    {
      month,
      weekdays,
      weeks,
      year,
    },
    { goToNextMonth, goToPrevMonth },
  ];
}

export default useCalendar;
