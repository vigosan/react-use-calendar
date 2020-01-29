import { renderHook } from '@testing-library/react-hooks';
import useCalendar from './index';

describe('useCalendar', () => {
  describe('with no initialization', function() {
    let realDate;

    beforeEach(() => {
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

    it('returns current year', () => {
      const { result } = renderHook(() => useCalendar());
      const { year } = result.current;
      const expectedYear = 2019;

      expect(year).toEqual(expectedYear);
    });

    it('returns current month', () => {
      const { result } = renderHook(() => useCalendar());
      const { month } = result.current;
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
      const { year } = result.current;

      const expectedYear = 2018;
      expect(year).toEqual(expectedYear);
    });

    it('returns initialized month', () => {
      const { result } = renderHook(() => useCalendar(date));
      const { month } = result.current;
      const expectedMonth = {
        index: 4,
        name: 'May',
        shortName: 'May',
      };

      expect(month).toEqual(expectedMonth);
    });
  });
});
