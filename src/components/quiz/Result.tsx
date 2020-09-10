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
    <div>
      <div>
        <div>
          <strong>You've scored</strong>
        </div>
        <strong>{ totalCorrect } / { questions.length }</strong>
      </div>
      { questions.map(question => {
        return (
          <div key={ uniqueId('question') }>
            { question.correct_answer === question.answer ? '+' : '-' }&nbsp;
            <span dangerouslySetInnerHTML={{ __html: question.question }} />
          </div>
        )
      })}
      <div>
        <button onClick={ playAgain }>play again</button>
      </div>
    </div>
  )
}

export default Result;