import React, { FC } from 'react';
import { uniqueId } from 'lodash';
import { Quiz } from '../../store/quiz/types';

interface ResultProps {
  questions: Quiz[],
  playAgain: () => void;
}

const Result:FC<ResultProps> = ({ questions, playAgain }) => {
  const totalCorrect = questions.reduce((accumulator, question) => {
    return question.correct_answer === question.answer ? ++accumulator : accumulator
  }, 0);
  return (
    <div className='result'>
      <div className='result__score'>
        <div>
          <strong>You've scored</strong>
        </div>
        <strong>{ totalCorrect } / { questions.length }</strong>
      </div>
      { questions.map(question => {
        return (
          <div className={`result__question result__question--${question.correct_answer === question.answer ? 'correct' : 'incorrect'}`} key={ uniqueId('question') }>
            <span dangerouslySetInnerHTML={{ __html: question.question }} />
          </div>
        )
      })}
      <div className='result__controls'>
        <button className='btn btn--primary' onClick={ playAgain }>play again</button>
      </div>
    </div>
  )
}

export default Result;