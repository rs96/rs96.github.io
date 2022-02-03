import { SagaIterator } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/athletics";
import Types from "../actions/initialData";
import { Performance, Ranking } from "../types";

const testPerformances: Performance[] = [
    {
        value: 54.32,
        event: "Hammer",
        location: "South Shields",
        position: "1",
        date: 1643813832,
    },
    {
        value: 6.13,
        event: "Long Jump",
        location: "Gateshead",
        position: "1",
        date: 1643810732,
    },
    {
        value: 11.32,
        event: "100m",
        location: "York",
        position: "2",
        date: 1643821032,
    },
];
const testRankings: Ranking[] = [
    {
        rank: 5,
        event: "Hammer",
    },
    {
        rank: 2,
        event: "Long Jump",
    },
    {
        rank: 6,
        event: "100m",
    },
];

export function* handleFetchInitialData(): SagaIterator {
    yield put(actions.setPerformances(testPerformances));
    yield put(actions.setRankings(testRankings));
}

export function* fetchInitialData() {
    yield takeEvery(Types.FETCH_INITIAL_DATA, handleFetchInitialData);
}

export default [fetchInitialData];
