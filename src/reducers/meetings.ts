import Types from '../actions/athletics';
import { Meeting } from '../types';

const INITIAL_STATE: Meeting[] = [];

const reducer = (state: Meeting[] = INITIAL_STATE, action: { type: string; payload: Meeting[] }): Meeting[] => {
  switch (action.type) {
    case Types.SET_MEETINGS:
      if (action.payload) {
        return [...state, ...action.payload];
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
