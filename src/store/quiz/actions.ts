import { action } from 'typesafe-actions';
import { QuizActionTypes, Quiz, Answer, SAVE_ANSWER, SaveAnswerAction, InitQuizAction, INIT_QUIZ } from './types'

export const fetchRequest = (data: { amount: number, difficulty: string }) => action(QuizActionTypes.FETCH_REQUEST, data)
export const fetchSuccess = (data: Quiz[]) => action(QuizActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(QuizActionTypes.FETCH_ERROR, message)
export const saveAnswer = (answer: Answer): SaveAnswerAction => {
  return {
    type: SAVE_ANSWER,
    payload: answer
  }
}
export const initQuiz = (): InitQuizAction => {
  return {
    type: INIT_QUIZ
  }
}
