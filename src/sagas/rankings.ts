import { SagaIterator } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";
import * as rankingsActions from "../actions/rankings";
import Types from "../actions/initialData";
import { Performance } from "../types";

const testPerformances: Performance[] = [
    {
        value: 54.32,
        event: "Hammer",
        location: "South Shields",
        position: "1",
        date: 1643813832,
    },
];

export function* handleFetchInitialData(): SagaIterator {
    yield put(rankingsActions.setPerformances(testPerformances));
}

export function* fetchInitialData() {
    yield takeEvery(Types.FETCH_INITIAL_DATA, handleFetchInitialData);
}

export default [fetchInitialData];
