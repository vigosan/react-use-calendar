import {
  add,
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  getDate,
  isSameDay,
  isSameMonth,
  isWeekend,
  startOfMonth,
  startOfWeek,
  sub,
} from 'date-fns';
import {
  DAYS_OF_WEEK,
  MONTHS,
  MONTHS_SHORT,
  WEEKDAYS,
  WEEKDAYS_SHORT,
} from './constants';

function getMonth(date) {
  const monthIndex = date.getMonth();

  return {
    monthIndex,
    name: MONTHS[monthIndex],
    shortName: MONTHS_SHORT[monthIndex],
  };
}

function addMonth(date) {
  return add(date, { months: 1 });
}

function subMonth(date) {
  return sub(date, { months: 1 });
}

function getDay(date) {
  const dayIndex = date.getDay();
  const now = new Date();

  return {
    dayIndex,
    name: WEEKDAYS[dayIndex],
    shortName: WEEKDAYS[dayIndex],
    dayOfMonth: getDate(date),
    isToday: isSameDay(date, now),
    isWeekend: isWeekend(date),
    isSameMonth: isSameMonth(date, now),
  };
}

function getWeeks(date) {
  const start = startOfWeek(startOfMonth(date));
  const end = startOfWeek(endOfMonth(date));

  return eachWeekOfInterval({ start, end }).reduce((acc, firstDayOfWeek) => {
    acc.push(
      eachDayOfInterval({
        start: firstDayOfWeek,
        end: endOfWeek(firstDayOfWeek),
      }).map(getDay),
    );

    return acc;
  }, []);
}

function getYear(date) {
  return date.getFullYear();
}

function getWeekdays() {
  return [...Array(DAYS_OF_WEEK).keys()].reduce((acc, i) => {
    acc.push({ name: WEEKDAYS[i], shortName: WEEKDAYS_SHORT[i] });
    return acc;
  }, []);
}

export { addMonth, getMonth, getWeekdays, getWeeks, getYear, subMonth };
