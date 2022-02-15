import { RootState } from '../index';
import { Performance } from '../types';

export const getPerformances = (state: RootState): Performance[] => state.performances;

export const getPerformancesOfEventId = (eventId: string) => (state: RootState) =>
  getPerformances(state)
    .filter((performance) => performance.eventId === eventId)
    .slice(0, 100);
