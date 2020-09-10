import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { QuizActionTypes } from './types';
import { fetchRequest, fetchError, fetchSuccess } from './actions';
import { callApi } from '../../utils/api';

const API_ENDPOINT = 'https://opentdb.com'

function* handleFetch(action: ReturnType<typeof fetchRequest>) {
  try {
    const res = yield call(callApi, 'get', API_ENDPOINT, `?amount=${action.payload.amount}&difficulty=${action.payload.difficulty}&type=boolean`)

    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      yield put(fetchSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(QuizActionTypes.FETCH_REQUEST, handleFetch)
}

function* quizSaga() {
  yield all([fork(watchFetchRequest)])
}

export default quizSaga