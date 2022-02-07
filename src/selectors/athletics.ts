import { RootState } from "../index";
import { Ranking, Performance } from "../types";

const getState = (state: RootState): any => state.athletics;

export const getPerformances = (state: any): Performance[] =>
  getState(state).performances;

export const getRankings = (state: any): Ranking[] => getState(state).rankings;
