
import * as React from 'react';
import { Quiz } from '../../store/quiz/types';

interface QuestionProps {
  question: Quiz,
  setAnswer: (answer: string) => void;
}

const Root: React.SFC<QuestionProps> = ({ question, setAnswer }) => {
  return (
    <div>
      <div>
        <strong>
          { question.category }
        </strong>
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: question.question }} />
      </div>
      <div>
        <button onClick={ () => setAnswer('True') }>
          True
        </button>
        <button onClick={ () => setAnswer('False') }>
          False
        </button>
      </div>
    </div>
  )
}

export default Root;