import { SagaIterator } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/athletics";
import Types from "../actions/initialData";
import scrapers from "../scrapers";

export function* handleFetchInitialData(): SagaIterator {
    const { performances, rankings } = yield call(scrapers.fetchPO10Data);
    yield put(actions.setPerformances(performances));
    yield put(actions.setRankings(rankings));
}

export function* fetchInitialData() {
    yield takeEvery(Types.FETCH_INITIAL_DATA, handleFetchInitialData);
}

export default [fetchInitialData];
