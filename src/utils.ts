import * as constants from './constants';
import * as types from './types';

export const ordinalFormat = (value: number) => `${value}${constants.ordinalMap[value % 10] ?? 'th'}`;

export const formatDate = (date: number) => {
  const dateObject = new Date(date);
  return `${ordinalFormat(dateObject.getDate())} ${
    constants.monthMap[dateObject.getMonth() + 1]
  } ${dateObject.getFullYear()}`;
};

export const getYearFromDate = (date: number) => new Date(date).getFullYear().toString();

export const formatPerformance = (performance: number, event: string, tags?: string[]) =>
  `${performance.toFixed(2)}${tags?.join()}${constants.timedEvents.includes(event) ? `s` : `m`}`;

export const sortByDate = (a: types.Performance, b: types.Performance) => b.date - a.date;
