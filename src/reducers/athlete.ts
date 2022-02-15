import Types from '../actions/athletics';
import { Athlete } from '../types';

const INITIAL_STATE: Athlete = {
  id: '',
  name: 'Name',
  club: 'Club',
  sex: 'Sex',
  ageGroup: 'Age Group',
  county: 'County',
  region: 'Region',
  nation: 'Nation',
};

const reducer = (state: Athlete = INITIAL_STATE, action: { type: string; payload: Athlete }): Athlete => {
  switch (action.type) {
    case Types.SET_ATHLETE:
      if (action.payload) {
        return action.payload;
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
