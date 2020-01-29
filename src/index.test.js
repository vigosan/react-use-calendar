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
  });
});
