import Types from '../actions/athletics';
import { Performance } from '../types';

const INITIAL_STATE: Performance[] = [];

const reducer = (
  state: Performance[] = INITIAL_STATE,
  action: { type: string; payload: Performance[] }
): Performance[] => {
  switch (action.type) {
    case Types.SET_PERFORMANCES:
      if (action.payload) {
        return [...state, ...action.payload];
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
