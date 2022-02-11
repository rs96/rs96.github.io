import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/athletics';
import Types from '../actions/initialData';
import { fetchAthleteData } from '../api/athlete';
import scrapers from '../scrapers';

const isUsingServer = false;

export function* handleFetchInitialData(): SagaIterator {
  const { performances, rankings } = yield call(scrapers.fetchPO10Data);
  if (isUsingServer) {
    const athleteData = yield call(fetchAthleteData, 78994);
    console.log({ athleteData });
  }
  yield put(actions.setPerformances(performances));
  yield put(actions.setRankings(rankings));
}

export function* fetchInitialData() {
  yield takeEvery(Types.FETCH_INITIAL_DATA, handleFetchInitialData);
}

export default [fetchInitialData];
