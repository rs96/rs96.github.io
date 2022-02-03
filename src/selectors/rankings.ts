import { RootState } from "../index";

const getState = (state: RootState): any => state.rankings;

export const getPerformances = (state: any): Performance[] => getState(state);
