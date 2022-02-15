import { RootState } from '../index';
import { Venue } from '../types';

export const getRoot = (state: RootState): Venue[] => state.venues;

export const getVenues = (state: RootState): Venue[] => state.venues;

export const getVenueNameById =
  (id: string) =>
  (state: RootState): string =>
    getRoot(state).find((venue) => venue.id === id)?.name || '';
