export const SAVE_ANSWER = 'SAVE_ANSWER'
export const INIT_QUIZ = 'INIT_QUIZ'

export interface Quiz extends ApiResponse {
  category: string,
  type: boolean,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers: Array<string>
}

export type ApiResponse = Record<string, any>

export enum QuizActionTypes {
  FETCH_REQUEST = '@@quiz/FETCH_REQUEST',
  FETCH_SUCCESS = '@@quiz/FETCH_SUCCESS',
  FETCH_ERROR = '@@quiz/FETCH_ERROR'
}

export interface QuizState {
  readonly loading: boolean
  readonly questions: Quiz[]
  readonly errors?: string
}

export type Answer = {
  readonly answer: string
  readonly index: number
}

export interface SaveAnswerAction {
  type: typeof SAVE_ANSWER
  payload: Answer
}

export interface InitQuizAction {
  type: typeof INIT_QUIZ
}