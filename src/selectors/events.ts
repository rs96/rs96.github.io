import { RootState } from '../index';
import { Event } from '../types';

export const getRoot = (state: RootState): Event[] => state.events;

export const getEvents = (state: RootState): Event[] => state.events;

export const getEventNameById =
  (id: string) =>
  (state: RootState): string =>
    getRoot(state).find((event) => event.id === id)?.name || '';
