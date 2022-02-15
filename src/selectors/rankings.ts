import { RootState } from '../index';
import { Ranking } from '../types';

export const getRankings = (state: RootState): Ranking[] => state.rankings;
