import { RootState } from '../index';
import { Performance } from '../types';

export const getPerformances = (state: RootState): Performance[] => state.performances;
