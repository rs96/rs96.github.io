import * as constants from './constants';

export const ordinalFormat = (value: number) => `${value}${constants.ordinalMap[value % 10] ?? 'th'}`;

export const formatDate = (date: number) => {
  const dateObject = new Date(date);
  return `${ordinalFormat(dateObject.getDate())} ${
    constants.monthMap[dateObject.getMonth() + 1]
  } ${dateObject.getFullYear()}`;
};

export const getYearFromDate = (date: number) => new Date(date * 1000).getFullYear().toString();

export const formatPerformance = (performance: number, event: string) =>
  constants.timedEvents.includes(event) ? `${performance.toFixed(2)}s` : `${performance.toFixed(2)}m`;
