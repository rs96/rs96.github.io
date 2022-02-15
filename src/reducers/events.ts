import Types from '../actions/athletics';
import { Event } from '../types';

const INITIAL_STATE: Event[] = [];

const reducer = (state: Event[] = INITIAL_STATE, action: { type: string; payload: Event[] }): Event[] => {
  switch (action.type) {
    case Types.SET_EVENTS:
      if (action.payload) {
        return [...state, ...action.payload];
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
