import { Performance, Ranking } from '../types';

enum Types {
  SET_PERFORMANCES = 'consultants/SET_PERFORMANCES',
  SET_RANKINGS = 'consultants/SET_RANKINGS',
}

export const setPerformances = (performances: Performance[]) => ({
  type: Types.SET_PERFORMANCES,
  payload: performances,
});
export const setRankings = (rankings: Ranking[]) => ({
  type: Types.SET_RANKINGS,
  payload: rankings,
});

export default Types;
