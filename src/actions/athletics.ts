import * as types from '../types';

enum Types {
  SET_PERFORMANCES = 'athletics/SET_PERFORMANCES',
  SET_RANKINGS = 'athletics/SET_RANKINGS',
  SET_EVENTS = 'athletics/SET_EVENTS',
  SET_MEETINGS = 'athletics/SET_MEETINGS',
  SET_VENUES = 'athletics/SET_VENUES',
  SET_ATHLETE = 'athletics/SET_ATHLETE',
}

export const setPerformances = (performances: types.Performance[]) => ({
  type: Types.SET_PERFORMANCES,
  payload: performances,
});
export const setRankings = (rankings: types.Ranking[]) => ({
  type: Types.SET_RANKINGS,
  payload: rankings,
});
export const setEvents = (events: types.Event[]) => ({
  type: Types.SET_EVENTS,
  payload: events,
});
export const setMeetings = (meetings: types.Meeting[]) => ({
  type: Types.SET_MEETINGS,
  payload: meetings,
});
export const setVenues = (venues: types.Venue[]) => ({
  type: Types.SET_VENUES,
  payload: venues,
});
export const setAthlete = (athlete: types.Venue) => ({
  type: Types.SET_ATHLETE,
  payload: athlete,
});

export default Types;
