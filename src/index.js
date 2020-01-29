import { useReducer } from 'react';
import { addMonth, getYear, subMonth, getMonth, getWeekdays } from './utils';
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
  const [state, dispatch] = useReducer(reducer, {
    date: startDate || new Date(),
  });

  const month = getMonth(state.date);
  const year = getYear(state.date);
  const weekdays = getWeekdays();
  const goToNextMonth = () => dispatch({ type: actionTypes.GO_TO_NEXT_MONTH });
  const goToPrevMonth = () => dispatch({ type: actionTypes.GO_TO_PREV_MONTH });

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
