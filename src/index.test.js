import { renderHook, act } from '@testing-library/react-hooks';
import useCalendar from './index';

describe(useCalendar, function() {
  it('returns weekdays', function() {
    const { result } = renderHook(() => useCalendar());
    const [{ weekdays }] = result.current;
    const expectedWeekdays = [
      { name: 'Sunday', shortName: 'Sun' },
      { name: 'Monday', shortName: 'Mon' },
      { name: 'Tuesday', shortName: 'Tue' },
      { name: 'Wednesday', shortName: 'Wed' },
      { name: 'Thursday', shortName: 'Thu' },
      { name: 'Friday', shortName: 'Fri' },
      { name: 'Saturday', shortName: 'Sat' },
    ];

    expect(weekdays).toEqual(expectedWeekdays);
  });

  describe('with no initialization', function() {
    let realDate;

    beforeEach(function() {
      const now = '2019-01-29T09:00:00.000Z';
      const date = new Date(now);

      realDate = Date;
      global.Date = class extends Date {
        constructor() {
          return date;
        }
      };
    });

    afterEach(function() {
      global.Date = realDate;
    });

    it('returns current year', function() {
      const { result } = renderHook(() => useCalendar());
      const [{ year }] = result.current;
      const expectedYear = 2019;

      expect(year).toEqual(expectedYear);
    });

    it('returns current month', function() {
      const { result } = renderHook(() => useCalendar());
      const [{ month }] = result.current;
      const expectedMonth = {
        monthIndex: 0,
        name: 'January',
        shortName: 'Jan',
      };

      expect(month).toEqual(expectedMonth);
    });
  });

  describe('with initialization', function() {
    const when = '2018-05-13T09:00:00.000Z';
    const date = new Date(when);

    it('returns initialized year', () => {
      const { result } = renderHook(() => useCalendar(date));
      const [{ year }] = result.current;

      const expectedYear = 2018;
      expect(year).toEqual(expectedYear);
    });

    it('returns initialized month', function() {
      const { result } = renderHook(() => useCalendar(date));
      const [{ month }] = result.current;
      const expectedMonth = {
        monthIndex: 4,
        name: 'May',
        shortName: 'May',
      };

      expect(month).toEqual(expectedMonth);
    });

    it('returns current weeks ', () => {
      const { result } = renderHook(() => useCalendar());
      const [{ weeks }] = result.current;

      const expectedMonth = [
        [
          {
            dayOfMonth: 29,
            dayIndex: 0,
            isSameMonth: false,
            isToday: false,
            isWeekend: true,
            name: 'Sunday',
            shortName: 'Sunday',
          },
          {
            dayOfMonth: 30,
            dayIndex: 1,
            isSameMonth: false,
            isToday: false,
            isWeekend: false,
            name: 'Monday',
            shortName: 'Monday',
          },
          {
            dayOfMonth: 31,
            dayIndex: 2,
            isSameMonth: false,
            isToday: false,
            isWeekend: false,
            name: 'Tuesday',
            shortName: 'Tuesday',
          },
          {
            dayOfMonth: 1,
            dayIndex: 3,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Wednesday',
            shortName: 'Wednesday',
          },
          {
            dayOfMonth: 2,
            dayIndex: 4,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Thursday',
            shortName: 'Thursday',
          },
          {
            dayOfMonth: 3,
            dayIndex: 5,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Friday',
            shortName: 'Friday',
          },
          {
            dayOfMonth: 4,
            dayIndex: 6,
            isSameMonth: true,
            isToday: false,
            isWeekend: true,
            name: 'Saturday',
            shortName: 'Saturday',
          },
        ],
        [
          {
            dayOfMonth: 5,
            dayIndex: 0,
            isSameMonth: true,
            isToday: false,
            isWeekend: true,
            name: 'Sunday',
            shortName: 'Sunday',
          },
          {
            dayOfMonth: 6,
            dayIndex: 1,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Monday',
            shortName: 'Monday',
          },
          {
            dayOfMonth: 7,
            dayIndex: 2,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Tuesday',
            shortName: 'Tuesday',
          },
          {
            dayOfMonth: 8,
            dayIndex: 3,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Wednesday',
            shortName: 'Wednesday',
          },
          {
            dayOfMonth: 9,
            dayIndex: 4,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Thursday',
            shortName: 'Thursday',
          },
          {
            dayOfMonth: 10,
            dayIndex: 5,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Friday',
            shortName: 'Friday',
          },
          {
            dayOfMonth: 11,
            dayIndex: 6,
            isSameMonth: true,
            isToday: false,
            isWeekend: true,
            name: 'Saturday',
            shortName: 'Saturday',
          },
        ],
        [
          {
            dayOfMonth: 12,
            dayIndex: 0,
            isSameMonth: true,
            isToday: false,
            isWeekend: true,
            name: 'Sunday',
            shortName: 'Sunday',
          },
          {
            dayOfMonth: 13,
            dayIndex: 1,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Monday',
            shortName: 'Monday',
          },
          {
            dayOfMonth: 14,
            dayIndex: 2,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Tuesday',
            shortName: 'Tuesday',
          },
          {
            dayOfMonth: 15,
            dayIndex: 3,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Wednesday',
            shortName: 'Wednesday',
          },
          {
            dayOfMonth: 16,
            dayIndex: 4,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Thursday',
            shortName: 'Thursday',
          },
          {
            dayOfMonth: 17,
            dayIndex: 5,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Friday',
            shortName: 'Friday',
          },
          {
            dayOfMonth: 18,
            dayIndex: 6,
            isSameMonth: true,
            isToday: false,
            isWeekend: true,
            name: 'Saturday',
            shortName: 'Saturday',
          },
        ],
        [
          {
            dayOfMonth: 19,
            dayIndex: 0,
            isSameMonth: true,
            isToday: false,
            isWeekend: true,
            name: 'Sunday',
            shortName: 'Sunday',
          },
          {
            dayOfMonth: 20,
            dayIndex: 1,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Monday',
            shortName: 'Monday',
          },
          {
            dayOfMonth: 21,
            dayIndex: 2,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Tuesday',
            shortName: 'Tuesday',
          },
          {
            dayOfMonth: 22,
            dayIndex: 3,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Wednesday',
            shortName: 'Wednesday',
          },
          {
            dayOfMonth: 23,
            dayIndex: 4,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Thursday',
            shortName: 'Thursday',
          },
          {
            dayOfMonth: 24,
            dayIndex: 5,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Friday',
            shortName: 'Friday',
          },
          {
            dayOfMonth: 25,
            dayIndex: 6,
            isSameMonth: true,
            isToday: false,
            isWeekend: true,
            name: 'Saturday',
            shortName: 'Saturday',
          },
        ],
        [
          {
            dayOfMonth: 26,
            dayIndex: 0,
            isSameMonth: true,
            isToday: false,
            isWeekend: true,
            name: 'Sunday',
            shortName: 'Sunday',
          },
          {
            dayOfMonth: 27,
            dayIndex: 1,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Monday',
            shortName: 'Monday',
          },
          {
            dayOfMonth: 28,
            dayIndex: 2,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Tuesday',
            shortName: 'Tuesday',
          },
          {
            dayOfMonth: 29,
            dayIndex: 3,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Wednesday',
            shortName: 'Wednesday',
          },
          {
            dayOfMonth: 30,
            dayIndex: 4,
            isSameMonth: true,
            isToday: true,
            isWeekend: false,
            name: 'Thursday',
            shortName: 'Thursday',
          },
          {
            dayOfMonth: 31,
            dayIndex: 5,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Friday',
            shortName: 'Friday',
          },
          {
            dayOfMonth: 1,
            dayIndex: 6,
            isSameMonth: false,
            isToday: false,
            isWeekend: true,
            name: 'Saturday',
            shortName: 'Saturday',
          },
        ],
      ];

      expect(weeks).toEqual(expectedMonth);
    });
  });

  describe('actions', function() {
    const when = '2018-05-13T09:00:00.000Z';
    const date = new Date(when);

    describe('goToNextMonth', function() {
      it('moves date to next month', function() {
        const { result } = renderHook(() => useCalendar(date));
        const [_, actions] = result.current; // eslint-disable-line no-unused-vars

        act(() => actions.goToNextMonth());
        let [state] = result.current;

        const expectedMonth = {
          monthIndex: 5,
          name: 'June',
          shortName: 'Jun',
        };

        expect(state.month).toEqual(expectedMonth);
      });
    });

    describe('goToPrevMonth', function() {
      it('moves date to prev month', function() {
        const { result } = renderHook(() => useCalendar(date));
        const [_, actions] = result.current; // eslint-disable-line no-unused-vars

        act(() => actions.goToPrevMonth());
        let [state] = result.current;

        const expectedMonth = {
          monthIndex: 3,
          name: 'April',
          shortName: 'Apr',
        };

        expect(state.month).toEqual(expectedMonth);
      });
    });
  });
});
