import Types from "../actions/athletics";
import { IAthleticsState, Ranking, Performance } from "../types";

const INITIAL_STATE: IAthleticsState = {
  performances: [],
  rankings: [],
};

const reducer = (
  state: IAthleticsState = INITIAL_STATE,
  action: { type: string; payload: Performance[] | Ranking[] }
): IAthleticsState => {
  switch (action.type) {
    case Types.SET_PERFORMANCES:
      if (action.payload) {
        return {
          ...state,
          performances: action.payload as Performance[],
        };
      }
      return {
        ...state,
        performances: [],
      };
    case Types.SET_RANKINGS:
      if (action.payload) {
        return {
          ...state,
          rankings: action.payload as Ranking[],
        };
      }
      return {
        ...state,
        rankings: [],
      };
    default:
      return state;
  }
};

export default reducer;
