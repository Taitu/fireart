import { Reducer } from 'redux';
import { QuizState, QuizActionTypes, SAVE_ANSWER, INIT_QUIZ } from './types';

export const initialState: QuizState = {
  loading: false,
  questions: [],
  errors: undefined
}

const reducer: Reducer<QuizState> = (state = initialState, action) => {
  switch (action.type) {
    case QuizActionTypes.FETCH_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }

    case QuizActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        questions: action.payload.results
      }
    }

    case QuizActionTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        errors: action.payload
      }
    }

    case SAVE_ANSWER: {
      const questions = state.questions
      questions[action.payload.index].answer = action.payload.answer
      return {
        ...state,
        questions
      }
    }

    case INIT_QUIZ: {
      return {
        ...state,
        questions: []
      }
    }

    default: {
      return state
    }
  }
}
export { reducer as quizReducer }