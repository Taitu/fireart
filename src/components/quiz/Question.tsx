
import * as React from 'react';
import { Quiz } from '../../store/quiz/types';

interface QuestionProps {
  question: Quiz,
  setAnswer: (answer: string) => void;
}

const Root: React.SFC<QuestionProps> = ({ question, setAnswer }) => {
  return (
    <div className='question'>
      <div className='question__category'>
        <strong>
          { question.category }
        </strong>
      </div>
      <div className='question__body'>
        <div className='question__question'>
          <div dangerouslySetInnerHTML={{ __html: question.question }} />
        </div>
        <div className='question__controls'>
          <button className='btn btn--primary question__controls__btn' onClick={ () => setAnswer('True') }>
            True
          </button>
          <button className='btn btn--primary question__controls__btn' onClick={ () => setAnswer('False') }>
            False
          </button>
        </div>
      </div>
    </div>
  )
}

export default Root;