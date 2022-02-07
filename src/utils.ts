import * as constants from "./constants";

export const ordinalFormat = (value: number) =>
  `${value}${constants.ordinalMap[value % 10] ?? "th"}`;

export const formatDate = (date: number) => {
  const dateObject = new Date(date * 1000);
  return `${ordinalFormat(dateObject.getDate())} ${
    constants.monthMap[dateObject.getMonth() + 1]
  } ${dateObject.getFullYear()}`;
};

export const formatPerformance = (performance: number, event: string) =>
  constants.timedEvents.includes(event) ? `${performance}s` : `${performance}m`;
