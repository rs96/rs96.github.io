import { all, spawn } from 'redux-saga/effects';
import athletics from './athletics';

const getSagas = () => [...athletics];

export default function* rootSaga() {
  yield all(getSagas().map(spawn));
}
