import { renderHook, act } from '@testing-library/react-hooks';
import useCalendar from './index';

describe(useCalendar, function() {
  it('returns weekdays', function() {
    const { result } = renderHook(() => useCalendar());
    const [{ weekdays }] = result.current;
    const expectedWeekdays = {
      0: { name: 'Sunday', shortName: 'Sun' },
      1: { name: 'Monday', shortName: 'Mon' },
      2: { name: 'Tuesday', shortName: 'Tue' },
      3: { name: 'Wednesday', shortName: 'Wed' },
      4: { name: 'Thursday', shortName: 'Thu' },
      5: { name: 'Friday', shortName: 'Fri' },
      6: { name: 'Saturday', shortName: 'Sat' },
    };

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
        index: 0,
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
        index: 4,
        name: 'May',
        shortName: 'May',
      };

      expect(month).toEqual(expectedMonth);
    });

    it('returns current weeks ', () => {
      const { result } = renderHook(() => useCalendar());
      const [{ weeks }] = result.current;

      const expectedMonth = {
        '0': [
          {
            dayOfMonth: 29,
            index: 0,
            isSameMonth: false,
            isToday: false,
            isWeekend: true,
            name: 'Sunday',
            shortName: 'Sunday',
          },
          {
            dayOfMonth: 30,
            index: 1,
            isSameMonth: false,
            isToday: false,
            isWeekend: false,
            name: 'Monday',
            shortName: 'Monday',
          },
          {
            dayOfMonth: 31,
            index: 2,
            isSameMonth: false,
            isToday: false,
            isWeekend: false,
            name: 'Tuesday',
            shortName: 'Tuesday',
          },
          {
            dayOfMonth: 1,
            index: 3,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Wednesday',
            shortName: 'Wednesday',
          },
          {
            dayOfMonth: 2,
            index: 4,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Thursday',
            shortName: 'Thursday',
          },
          {
            dayOfMonth: 3,
            index: 5,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Friday',
            shortName: 'Friday',
          },
          {
            dayOfMonth: 4,
            index: 6,
            isSameMonth: true,
            isToday: false,
            isWeekend: true,
            name: 'Saturday',
            shortName: 'Saturday',
          },
        ],
        '1': [
          {
            dayOfMonth: 5,
            index: 0,
            isSameMonth: true,
            isToday: false,
            isWeekend: true,
            name: 'Sunday',
            shortName: 'Sunday',
          },
          {
            dayOfMonth: 6,
            index: 1,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Monday',
            shortName: 'Monday',
          },
          {
            dayOfMonth: 7,
            index: 2,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Tuesday',
            shortName: 'Tuesday',
          },
          {
            dayOfMonth: 8,
            index: 3,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Wednesday',
            shortName: 'Wednesday',
          },
          {
            dayOfMonth: 9,
            index: 4,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Thursday',
            shortName: 'Thursday',
          },
          {
            dayOfMonth: 10,
            index: 5,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Friday',
            shortName: 'Friday',
          },
          {
            dayOfMonth: 11,
            index: 6,
            isSameMonth: true,
            isToday: false,
            isWeekend: true,
            name: 'Saturday',
            shortName: 'Saturday',
          },
        ],
        '2': [
          {
            dayOfMonth: 12,
            index: 0,
            isSameMonth: true,
            isToday: false,
            isWeekend: true,
            name: 'Sunday',
            shortName: 'Sunday',
          },
          {
            dayOfMonth: 13,
            index: 1,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Monday',
            shortName: 'Monday',
          },
          {
            dayOfMonth: 14,
            index: 2,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Tuesday',
            shortName: 'Tuesday',
          },
          {
            dayOfMonth: 15,
            index: 3,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Wednesday',
            shortName: 'Wednesday',
          },
          {
            dayOfMonth: 16,
            index: 4,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Thursday',
            shortName: 'Thursday',
          },
          {
            dayOfMonth: 17,
            index: 5,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Friday',
            shortName: 'Friday',
          },
          {
            dayOfMonth: 18,
            index: 6,
            isSameMonth: true,
            isToday: false,
            isWeekend: true,
            name: 'Saturday',
            shortName: 'Saturday',
          },
        ],
        '3': [
          {
            dayOfMonth: 19,
            index: 0,
            isSameMonth: true,
            isToday: false,
            isWeekend: true,
            name: 'Sunday',
            shortName: 'Sunday',
          },
          {
            dayOfMonth: 20,
            index: 1,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Monday',
            shortName: 'Monday',
          },
          {
            dayOfMonth: 21,
            index: 2,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Tuesday',
            shortName: 'Tuesday',
          },
          {
            dayOfMonth: 22,
            index: 3,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Wednesday',
            shortName: 'Wednesday',
          },
          {
            dayOfMonth: 23,
            index: 4,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Thursday',
            shortName: 'Thursday',
          },
          {
            dayOfMonth: 24,
            index: 5,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Friday',
            shortName: 'Friday',
          },
          {
            dayOfMonth: 25,
            index: 6,
            isSameMonth: true,
            isToday: false,
            isWeekend: true,
            name: 'Saturday',
            shortName: 'Saturday',
          },
        ],
        '4': [
          {
            dayOfMonth: 26,
            index: 0,
            isSameMonth: true,
            isToday: false,
            isWeekend: true,
            name: 'Sunday',
            shortName: 'Sunday',
          },
          {
            dayOfMonth: 27,
            index: 1,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Monday',
            shortName: 'Monday',
          },
          {
            dayOfMonth: 28,
            index: 2,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Tuesday',
            shortName: 'Tuesday',
          },
          {
            dayOfMonth: 29,
            index: 3,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Wednesday',
            shortName: 'Wednesday',
          },
          {
            dayOfMonth: 30,
            index: 4,
            isSameMonth: true,
            isToday: true,
            isWeekend: false,
            name: 'Thursday',
            shortName: 'Thursday',
          },
          {
            dayOfMonth: 31,
            index: 5,
            isSameMonth: true,
            isToday: false,
            isWeekend: false,
            name: 'Friday',
            shortName: 'Friday',
          },
          {
            dayOfMonth: 1,
            index: 6,
            isSameMonth: false,
            isToday: false,
            isWeekend: true,
            name: 'Saturday',
            shortName: 'Saturday',
          },
        ],
      };
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
          index: 5,
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
          index: 3,
          name: 'April',
          shortName: 'Apr',
        };

        expect(state.month).toEqual(expectedMonth);
      });
    });
  });
});
