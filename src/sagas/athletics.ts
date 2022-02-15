import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/athletics';
import Types from '../actions/initialData';
import { fetchAthleteData } from '../api/athlete';
import rankings from '../sample-data/rshipley/rankings.json';
import sampleData from '../sample-data/rshipley/thepowerof10.json';
import { sortByDate } from '../utils';

const isUsingServer = false;

export function* handleFetchInitialData(): SagaIterator {
  let athleteData;
  if (isUsingServer) {
    athleteData = yield call(fetchAthleteData, 78994);
  } else {
    athleteData = sampleData;
  }
  yield put(actions.setAthlete(athleteData.athlete));
  yield put(actions.setPerformances(athleteData.performances.sort(sortByDate)));
  yield put(actions.setMeetings(athleteData.meetings));
  yield put(actions.setEvents(athleteData.events));
  yield put(actions.setVenues(athleteData.venues));
  yield put(actions.setRankings(rankings));
}

export function* fetchInitialData() {
  yield takeEvery(Types.FETCH_INITIAL_DATA, handleFetchInitialData);
}

export default [fetchInitialData];
