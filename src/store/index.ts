import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import quizSaga from './quiz/sagas';
import { quizReducer } from './quiz/reducer';
import { QuizState } from './quiz/types';

export interface ApplicationState {
  quiz: QuizState,
  router: RouterState
}

export const createRootReducer = (history: History) =>
  combineReducers({
    quiz: quizReducer,
    router: connectRouter(history)
  })

export function* rootSaga() {
  yield all([fork(quizSaga)])
}