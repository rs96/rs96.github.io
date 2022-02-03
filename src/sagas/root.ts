import { all, spawn } from "redux-saga/effects";
import rankings from "./rankings";

const getSagas = () => [...rankings];

export default function* rootSaga() {
    yield all(getSagas().map(spawn));
}
