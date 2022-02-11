import Types from '../actions/athletics';
import { Ranking } from '../types';

const INITIAL_STATE: Ranking[] = [];

const reducer = (state: Ranking[] = INITIAL_STATE, action: { type: string; payload: Ranking[] }): Ranking[] => {
  switch (action.type) {
    case Types.SET_RANKINGS:
      if (action.payload) {
        return [...state, ...action.payload];
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
