import { add } from 'date-fns';

const months = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
  '_',
);
const monthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sept_Oct_Nov_Dec'.split(
  '_',
);
const weekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
  '_',
);
const weekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');

function addMonth(date) {
  return add(date, { months: 1 });
}

function getMonthByIndex(index) {
  return { index, name: months[index], shortName: monthsShort[index] };
}

function getWeekdays() {
  return [...Array(7).keys()].reduce((acc, i) => {
    acc[i] = { name: weekdays[i], shortName: weekdaysShort[i] };
    return acc;
  }, {});
}

export { getMonthByIndex, getWeekdays, addMonth };
