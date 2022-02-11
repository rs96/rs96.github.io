import Types from '../actions/athletics';
import { Venue } from '../types';

const INITIAL_STATE: Venue[] = [];

const reducer = (state: Venue[] = INITIAL_STATE, action: { type: string; payload: Venue[] }): Venue[] => {
  switch (action.type) {
    case Types.SET_VENUES:
      if (action.payload) {
        return [...state, ...action.payload];
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
